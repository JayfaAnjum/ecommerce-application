import { Link } from 'react-router-dom';

export default function Product({ product, col }) {
  return (
    <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
      <div className="card p-3 rounded shadow-sm h-80">
        {product.images.length > 0 && (
          <div
            className="d-flex justify-content-center align-items-center mb-3"
            style={{
              backgroundColor: '#f6f6f8ff', // light gray background for the image
              padding: '1rem',
              borderRadius: '0.5rem',
            }}
          >
            <img
              src={product.images[0].image}
              alt={product.name}
              style={{ maxHeight: '180px', objectFit: 'contain' }}
            />
          </div>
        )}

        <div className="card-body d-flex flex-column">
          <h5 className="card-title mb-2">
            <Link
              to={`/product/${product._id}`}
              className="text-decoration-none text-dark fw-semibold"
            >
              {product.name}
            </Link>
          </h5>

          <div className="ratings mb-2">
            <div className="ratings mt-auto">
                    <div className="rating-outer">
                    <div className="rating-inner" style={{width: `${product.ratings/ 5 * 100}%` }}></div>
                    </div>
                    <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
                </div>
          </div>

          <p className="card-text fw-bold fs-5 mb-3">${product.price}</p>

          <Link
            to={`/product/${product._id}`}
            id="view_btn"
            className="btn btn-primary mt-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
