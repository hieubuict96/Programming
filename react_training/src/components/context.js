import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [], // sản phẩm nào được thêm thì state này chuyển inCart = true; count = 1; total = price sản phẩm đó
    detailProduct: detailProduct,
    cart: [], // = mảng sản phẩm với inCart = true; count = tổng số sp của loại sp đó; total = tổng giá tiền của loại sp đó
    modalOpen: false,
    modalProduct: detailProduct, //= sản phẩm được chọn
    cartSubTotal: 0, // = giá tiền của tất cả các sản phẩm có trong giỏ hàng chưa thuế
    cartTax: 0, // = tổng thuế của tất cả sản phẩm có trong giỏ hàng
    cartTotal: 0, // = tổng giá tiền phải trả cho giỏ hàng được chọn
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts }; //state.products = storeProducts
    }); // trả về đối tượng {products: storeProducts}
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product; //trả về đối tượng sản phẩm thỏa mãn id
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product }; //trả về đối tượng {detailProduct: product} trong đó product là đối tượng sản phẩm thỏa mãn id
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const selectedproduct = this.getItem(id);
    const index = tempProducts.indexOf(selectedproduct);
    const product = tempProducts[index]; // tu viet
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] }; //state.cart có giá trị là mảng danh sách sản phẩm trong giỏ hàng
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
