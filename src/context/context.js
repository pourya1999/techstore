import React, { Component } from "react";
import { linkData } from "./LinkData";
import { Social } from "./Social";
import { servicesData } from "./ServicesData";
import { items } from "./productData";

const ProductContext = React.createContext();

export class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    cart: [],
    social: Social,
    servicesData: servicesData,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
    search: "",
    price: 0,
    min: 0,
    max: 0,
    company: "all",
    shipping: false
  };

  componentDidMount() {
    this.setProduct(items);
  }

  setProduct = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      return { id, ...item.fields, image };
    });
    let featuredProducts = storeProducts.filter(item => item.featured);
    let maxPrice = Math.max(...storeProducts.map(item => item.price));

    this.setState(
      {
        storeProducts,
        filteredProducts: storeProducts,
        featuredProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
        price: maxPrice,
        max: maxPrice
      },
      () => {
        this.addTotals();
      }
    );
  };
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };

  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };

  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    return {
      cartItems,
      subTotal,
      tax,
      total
    };
  };

  addTotals = () => {
    let totals = this.getTotals();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    });
  };

  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };

  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: { ...product },
      loading: false
    });
  };

  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  };

  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    });
  };
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  openCart = () => {
    this.setState({ cartOpen: true });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);
    console.log(tempCart);
    console.log(cartItem);
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);

    cartItem.count = cartItem.count - 1;
    if (cartItem.count === 0) {
      this.removeItem(id);
    } else {
      cartItem.total = cartItem.count * cartItem.price;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
          this.syncStorage();
        }
      );
    }
  };

  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.addTotals();
      this.syncStorage();
    });
  };

  removeItem = id => {
    let cart = [...this.state.cart];
    let removedCart = cart.filter(item => item.id !== id);
    console.log(removedCart);
    this.setState(
      {
        cart: [...removedCart]
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  handleChange = e => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState(
      {
        [name]: value
      },
      this.sortData
    );
  };

  sortData = () => {
    let { storeProducts, price, shipping, search, company } = this.state;
    price = parseInt(price);
    let tempProduct = [...storeProducts];
    if (company !== "All") {
      tempProduct = tempProduct.filter(item => item.company === company);
    }

    tempProduct = tempProduct.filter(item => item.price <= price);

    if (shipping)
      tempProduct = tempProduct.filter(item => item.shipping === true);

    if (search.length !== 0) {
      tempProduct = tempProduct.filter(item => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.title.toLowerCase();
        if (tempTitle.includes(tempSearch)) {
          return item;
        }
      });
    }

    this.setState({
      filteredProducts: tempProduct
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          clearCart: this.clearCart,
          removeItem: this.removeItem,
          handleChange: this.handleChange,
          ...this.state
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;

export default { ProductProvider, ProductConsumer };
