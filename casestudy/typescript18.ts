// Implement a new gateway class BankTransferGateway that logs payment processing.

// Use it with PaymentProcessor to process a payment.

// Write a mock gateway that simulates failure (return false) and test error handling.
interface PaymentGateway {
  processPayment(amount: number): boolean;
}
class PaymentProcessor {

  constructor(private gateway: PaymentGateway) {}

  pay(amount: number) {

    const success = this.gateway.processPayment(amount);

    if (success) {
      console.log("Payment successful");
    } else {
      console.log("Payment failed");
    }

  }

}
class BankTransferGateway implements PaymentGateway {

  processPayment(amount: number): boolean {

    console.log("Processing bank transfer of:", amount);

    return true; // assume success

  }

}
const bankGateway = new BankTransferGateway();

const processor = new PaymentProcessor(bankGateway);

processor.pay(500);
class MockFailureGateway implements PaymentGateway {

  processPayment(amount: number): boolean {

    console.log("Mock processing payment:", amount);

    return false; // simulate failure

  }

}
const mockGateway = new MockFailureGateway();

const testProcessor = new PaymentProcessor(mockGateway);

testProcessor.pay(300);
