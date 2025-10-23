import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const quickAmounts = [100, 200, 500, 1000];

const paymentMethods = [
  { id: 1, name: 'PayApp Wallet', balance: '₹2,450', icon: 'wallet', color: '#00BAF2' },
  { id: 2, name: 'UPI', detail: 'user@paytm', icon: 'logo-google', color: '#4CAF50' },
  { id: 3, name: 'Credit/Debit Card', detail: 'Add new card', icon: 'card', color: '#FF6B6B' },
  { id: 4, name: 'Net Banking', detail: 'Select bank', icon: 'business', color: '#9C27B0' },
];

export default function PaymentScreen() {
  const [selectedService, setSelectedService] = useState('mobile');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(1);

  const handlePayment = () => {
    alert('Payment successful! ₹' + amount);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Recharge & Bill Payment</Text>
        </View>

        <View style={styles.serviceSelector}>
          <TouchableOpacity
            style={[styles.serviceTab, selectedService === 'mobile' && styles.serviceTabActive]}
            onPress={() => setSelectedService('mobile')}
          >
            <Ionicons
              name="phone-portrait"
              size={20}
              color={selectedService === 'mobile' ? '#00BAF2' : '#999'}
            />
            <Text
              style={[
                styles.serviceTabText,
                selectedService === 'mobile' && styles.serviceTabTextActive,
              ]}
            >
              Mobile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.serviceTab, selectedService === 'dth' && styles.serviceTabActive]}
            onPress={() => setSelectedService('dth')}
          >
            <Ionicons name="tv" size={20} color={selectedService === 'dth' ? '#00BAF2' : '#999'} />
            <Text
              style={[
                styles.serviceTabText,
                selectedService === 'dth' && styles.serviceTabTextActive,
              ]}
            >
              DTH
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.serviceTab, selectedService === 'bill' && styles.serviceTabActive]}
            onPress={() => setSelectedService('bill')}
          >
            <Ionicons
              name="flash"
              size={20}
              color={selectedService === 'bill' ? '#00BAF2' : '#999'}
            />
            <Text
              style={[
                styles.serviceTabText,
                selectedService === 'bill' && styles.serviceTabTextActive,
              ]}
            >
              Bill
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>
            {selectedService === 'mobile'
              ? 'Mobile Number'
              : selectedService === 'dth'
              ? 'Customer ID'
              : 'Consumer Number'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder={
              selectedService === 'mobile' ? 'Enter mobile number' : 'Enter number'
            }
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
          <View style={styles.quickAmounts}>
            {quickAmounts.map((amt) => (
              <TouchableOpacity
                key={amt}
                style={styles.quickAmountButton}
                onPress={() => setAmount(amt.toString())}
              >
                <Text style={styles.quickAmountText}>₹{amt}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {amount && (
          <>
            <View style={styles.section}>
              <Text style={styles.label}>Select Payment Method</Text>
              {paymentMethods.map((method) => (
                <TouchableOpacity
                  key={method.id}
                  style={[
                    styles.paymentMethod,
                    selectedPayment === method.id && styles.paymentMethodActive,
                  ]}
                  onPress={() => setSelectedPayment(method.id)}
                >
                  <View style={styles.paymentMethodLeft}>
                    <View style={[styles.paymentIcon, { backgroundColor: method.color + '20' }]}>
                      <Ionicons name={method.icon} size={24} color={method.color} />
                    </View>
                    <View>
                      <Text style={styles.paymentMethodName}>{method.name}</Text>
                      <Text style={styles.paymentMethodDetail}>{method.detail || method.balance}</Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.radio,
                      selectedPayment === method.id && styles.radioActive,
                    ]}
                  >
                    {selectedPayment === method.id && <View style={styles.radioInner} />}
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.summary}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Recharge Amount</Text>
                <Text style={styles.summaryValue}>₹{amount}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Convenience Fee</Text>
                <Text style={styles.summaryValue}>₹0</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryRow}>
                <Text style={styles.totalLabel}>Total Amount</Text>
                <Text style={styles.totalValue}>₹{amount}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
              <Text style={styles.payButtonText}>Pay ₹{amount}</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceSelector: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 12,
    padding: 4,
  },
  serviceTab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  serviceTabActive: {
    backgroundColor: '#E3F2FD',
  },
  serviceTabText: {
    fontSize: 14,
    color: '#999',
    marginLeft: 8,
  },
  serviceTabTextActive: {
    color: '#00BAF2',
    fontWeight: '600',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  quickAmounts: {
    flexDirection: 'row',
    marginTop: 12,
  },
  quickAmountButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#00BAF2',
  },
  quickAmountText: {
    color: '#00BAF2',
    fontSize: 14,
    fontWeight: '600',
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  paymentMethodActive: {
    borderColor: '#00BAF2',
    backgroundColor: '#E3F2FD',
  },
  paymentMethodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  paymentMethodName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  paymentMethodDetail: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioActive: {
    borderColor: '#00BAF2',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00BAF2',
  },
  summary: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00BAF2',
  },
  payButton: {
    backgroundColor: '#00BAF2',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
