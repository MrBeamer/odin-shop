import styles from "./Footer.module.css";
import logoLight from "../../assets/logo-light.svg";
import applePay from "../../assets/img/payment-methods/applePay.svg";
import invoice from "../../assets/img/payment-methods/invoice.svg";
import klarna from "../../assets/img/payment-methods/klarna.svg";
import mastercard from "../../assets/img/payment-methods/mastercard.svg";
import paypal from "../../assets/img/payment-methods/paypal.svg";
import visa from "../../assets/img/payment-methods/visa.svg";
import hermes from "../../assets/img/shipping-methods/hermes.svg";
import dhlExpress from "../../assets/img/shipping-methods/dhl-express.svg";
import postAt from "../../assets/img/shipping-methods/post-at.svg";

export default function Footer() {
  const paymentMethods = [applePay, invoice, klarna, mastercard, paypal, visa];
  const shippingMethods = [hermes, dhlExpress, postAt];
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeadline}>About us</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>About Sora</li>
            <li className={styles.footerItem}>Sora Inspiration</li>
            <li className={styles.footerItem}>Terms & Conditions</li>
            <li className={styles.footerItem}>Return Policy</li>
            <li className={styles.footerItem}>Cookie Policy</li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeadline}>Customer Service</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>FAQ</li>
            <li className={styles.footerItem}>Delivery Track</li>
            <li className={styles.footerItem}>My Order Returns</li>
            <li className={styles.footerItem}>Claims & Withdrawal</li>

            <li className={styles.footerItem}>Contact us</li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeadline}>Social Media</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>TikTok</li>
            <li className={styles.footerItem}>Instagram</li>
            <li className={styles.footerItem}>Youtube</li>
            <li className={styles.footerItem}>Facebook</li>
            <li className={styles.footerItem}>Pinterest</li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeadline}>Shopping</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>TikTok</li>
            <li className={styles.footerItem}>Instagram</li>
            <li className={styles.footerItem}>Youtube</li>
            <li className={styles.footerItem}>Facebook</li>
            <li className={styles.footerItem}>Pinterest</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerMid}>
        <div className={styles.partner}>
          <h3 className={styles.footerHeadline}>Our Delivery Partners</h3>
          <div className={styles.partnerList}>
            {shippingMethods.map((shippingMethod) => {
              return (
                <div key={shippingMethod} className={styles.partnerImgWrapper}>
                  <img
                    className={styles.partnerImg}
                    src={shippingMethod}
                    alt="Shipping Method"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.paymentMethods}>
          <h3 className={styles.footerHeadline}>Our Payment Methods</h3>
          <div className={styles.paymentMethodsList}>
            {paymentMethods.map((paymentMethod) => {
              return (
                <div
                  key={paymentMethod}
                  className={styles.paymentMethodImgWrapper}
                >
                  <img
                    className={styles.paymentMethodImg}
                    src={paymentMethod}
                    alt="Payment Method"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.logoWrapper}>
          <img className={styles.logo} src={logoLight} alt="Sora Logo" />
        </div>
        <div className={styles.copyRightContainer}>
          <p className={styles.copyRightText}>
            © 2026 Sora - Sitemap - Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}
