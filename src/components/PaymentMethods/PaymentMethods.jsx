import styles from "./PaymentMethods.module.css";
import applePay from "../../assets/img/payment-methods/applePay.svg";
import invoice from "../../assets/img/payment-methods/invoice.svg";
import klarna from "../../assets/img/payment-methods/klarna.svg";
import mastercard from "../../assets/img/payment-methods/mastercard.svg";
import paypal from "../../assets/img/payment-methods/paypal.svg";
import visa from "../../assets/img/payment-methods/visa.svg";
export default function PaymentMethods({ headline }) {
  const paymentMethods = [applePay, invoice, klarna, mastercard, paypal, visa];

  return (
    <div className={styles.paymentMethods}>
      {headline && <h3 className={styles.footerHeadline}>{headline}</h3>}
      <div className={styles.paymentMethodsList}>
        {paymentMethods.map((paymentMethod) => {
          return (
            <div key={paymentMethod} className={styles.paymentMethodImgWrapper}>
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
  );
}
