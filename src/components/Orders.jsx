import{ useState } from "react";
import "./order.css"; // Assuming you save the CSS separately
import {ordersData} from "../data";
const Orders = () => {
  // State for managing the currently viewed order details
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to handle the "View Details" button click
  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
  };

  // Function to handle modal close
  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="order col-md-10">
      <h1>Orders</h1>

      {/* Order List Section */}
      <div className="order-list col-md-12">
        <ul>
          <li className="order-item">
            <h4>Order</h4>
            <h4>Date</h4>
            <h4>Status</h4>
            <h4>Customer</h4>
            <h4>Total</h4>
            <h4>More</h4>
          </li>
          {ordersData.map((order, index) => (
            <li key={index} className="order-item">
              <div>
                <p>{order.orderNumber}</p>
              </div>
              <div>
                <p>{order.date}</p>
              </div>
              <div>
                <span
                  className="status"
                  style={{
                    color:
                      order.status === "Shipped"
                        ? "green"
                        : order.status === "Delivered"
                        ? "blue"
                        : order.status === "Processing"
                        ? "orange"
                        : "red",
                  }}
                >
                  {order.status}
                </span>
              </div>
              <div>
                <p>{order.customer}</p>
              </div>
              <div>
                <p>{order.totalAmount}</p>
              </div>
              <button
                className="item-btn"
                onClick={() => viewOrderDetails(order)}
                data-bs-toggle="modal"
                data-bs-target="#orderDetailsModal"
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div
          className="modal fade show"
          id="orderDetailsModal"
          tabIndex="-1"
          aria-labelledby="orderDetailsModalLabel"
          aria-hidden="true"
          style={{ display: "block" }} // To ensure it shows when triggered
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="orderDetailsModalLabel">
                  Order Details - {selectedOrder.orderNumber}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <ul className="modal-list">
                  {selectedOrder.products.map((product, idx) => (
                    <li key={idx}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-im"
                        style={{
                          width: "70px",
                          height: "70px",
                          aspectRatio: "2/2",
                          objectFit: "contain",
                        }}
                      />
                      <strong>{product.name}</strong>
                      <div>
                        Quantity: <strong>{product.quantity}</strong> <br />
                        Price: <strong>{product.price}</strong>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="shipping-info mt-4">
                  <h6>Shipping Address</h6>
                  <p>{selectedOrder.shippingAddress}</p>
                </div>

                <div className="tracking-info mt-3">
                  <h6>Tracking Information</h6>
                  <p>{selectedOrder.trackingInfo}</p>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="confirm-btn"> 
                Confirm
                </button>
                <button type="button" className="info-btn"> 
                View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
