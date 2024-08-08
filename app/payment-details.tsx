import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function PaymentDetailsScreen() {
  // Data for this screen, which can also be passed via navigation params if needed
  const data = {
    accountNumber: "1241241343421",
    dueDate: "Oct 18, 2023",
    payableAmount: "₱ 5,643.50",
    billSummary: [
      { id: 1, description: "Generation", amount: "₱ 5,404.24" },
      { id: 2, description: "Transmission", amount: "₱ 200.12" },
      { id: 3, description: "System Loss", amount: "₱ 12.32" },
      { id: 4, description: "Distribution (Meralco)", amount: "₱ 10.36" },
      { id: 5, description: "Subsidies", amount: "₱ 10.00" },
      { id: 6, description: "Government Taxes", amount: "₱ 15.13" },
      { id: 7, description: "Universal Charges", amount: "₱ 0.00" },
      { id: 8, description: "Fit-All (Renewable)", amount: "₱ 0.00" },
    ],
  };

  const { accountNumber, dueDate, payableAmount, billSummary } = data;

  return (
    <View style={styles.container}>
      <View style={styles.billContainer}>
        <Text style={styles.accountText}>Customer Account Number (CAN): {accountNumber}</Text>
        <Text style={styles.dueDateText}>Due Date: {dueDate}</Text>
        <Text style={styles.payableText}>Please Pay</Text>
        <Text style={styles.amountText}>{payableAmount}</Text>

        {/* Bill Computation Summary */}
        <Text style={styles.billSummaryTitle}>Bill Computation Summary</Text>
        {billSummary.map(({ id, description, amount }) => (
          <View key={id} style={styles.billItem}>
            <Text style={styles.billDescription}>{description}</Text>
            <Text style={styles.billAmount}>{amount}</Text>
          </View>
        ))}
        <Text style={styles.totalAmount}>TOTAL AMOUNT DUE: {payableAmount}</Text>
      </View>

      {/* Button to download PDF receipt */}
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Download PDF receipt</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  billContainer: {
    backgroundColor: "#ff6600",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  accountText: {
    fontSize: 16,
    color: "#fff",
  },
  dueDateText: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 10,
  },
  payableText: {
    fontSize: 14,
    color: "#fff",
    marginTop: 10,
  },
  amountText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 10,
  },
  billSummaryTitle: {
    fontSize: 18,
    color: "#fff",
    marginTop: 20,
  },
  billItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  billDescription: {
    fontSize: 14,
    color: "#fff",
  },
  billAmount: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    textAlign: "right",
  },
  downloadButton: {
    backgroundColor: "#00c853",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: "center",
  },
  downloadButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
