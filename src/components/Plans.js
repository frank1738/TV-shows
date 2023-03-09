import './Plans.css';

const Plans = () => {
  return (
    <div className="plans">
      <p>Renewal date: 08/5/2022</p>
      <div className="plans-screen">
        <div className="plans-info">
          <h5 className="product-name">Premium</h5>
          <h6 className="product-desc">4K + HDR</h6>
        </div>
        <button className="plan-btn">Subscribe</button>
      </div>
      <div className="plans-screen">
        <div className="plans-info">
          <h5 className="product-name">Standard</h5>
          <h6 className="product-desc">1080p</h6>
        </div>
        <button className="plan-btn">Subscribe</button>
      </div>
      <div className="plans-screen">
        <div className="plans-info">
          <h5 className="product-name">Basic</h5>
          <h6 className="product-desc">720p</h6>
        </div>
        <button className="plan-btn current-btn"> Current package</button>
      </div>
    </div>
  );
};

export default Plans;
