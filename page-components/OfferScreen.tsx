import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const offers = [
  {
    id: 1,
    title: 'Flat ₹50 Cashback',
    description: 'On Mobile Recharge above ₹299',
    code: 'MOBILE50',
    color: '#FF6B6B',
    icon: 'phone-portrait',
    validTill: '31 Dec 2025',
  },
  {
    id: 2,
    title: 'Get 10% Off',
    description: 'On DTH Recharge up to ₹100',
    code: 'DTH10',
    color: '#4ECDC4',
    icon: 'tv',
    validTill: '30 Nov 2025',
  },
  {
    id: 3,
    title: 'Save ₹100',
    description: 'On Electricity Bill Payment above ₹1000',
    code: 'ELEC100',
    color: '#FFD93D',
    icon: 'flash',
    validTill: '25 Dec 2025',
  },
  {
    id: 4,
    title: 'Cashback Up to ₹200',
    description: 'On Credit Card Bill Payment',
    code: 'CARD200',
    color: '#95E1D3',
    icon: 'card',
    validTill: '15 Dec 2025',
  },
  {
    id: 5,
    title: 'Flat 15% Off',
    description: 'On Gas Cylinder Booking',
    code: 'GAS15',
    color: '#F38181',
    icon: 'flame',
    validTill: '20 Dec 2025',
  },
  {
    id: 6,
    title: 'Refer & Earn',
    description: 'Get ₹100 for each successful referral',
    code: 'REFER100',
    color: '#6C5CE7',
    icon: 'people',
    validTill: 'Ongoing',
  },
];

export default function OffersScreen() {
  const copyCode = (code) => {
    alert(`Code ${code} copied to clipboard!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Exclusive Offers</Text>
        <Text style={styles.headerSubtitle}>Save more with amazing deals</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {offers.map((offer) => (
          <View key={offer.id} style={styles.offerCard}>
            <View style={styles.offerHeader}>
              <View style={[styles.offerIcon, { backgroundColor: offer.color + '20' }]}>
                <Ionicons name={offer.icon} size={32} color={offer.color} />
              </View>
              <View style={styles.offerInfo}>
                <Text style={styles.offerTitle}>{offer.title}</Text>
                <Text style={styles.offerDescription}>{offer.description}</Text>
              </View>
            </View>

            <View style={styles.offerFooter}>
              <View style={styles.codeContainer}>
                <Text style={styles.codeLabel}>Code:</Text>
                <Text style={styles.code}>{offer.code}</Text>
                <TouchableOpacity onPress={() => copyCode(offer.code)}>
                  <Ionicons name="copy-outline" size={20} color="#00BAF2" />
                </TouchableOpacity>
              </View>
              <Text style={styles.validTill}>Valid till {offer.validTill}</Text>
            </View>

            <TouchableOpacity style={[styles.useButton, { backgroundColor: offer.color }]}>
              <Text style={styles.useButtonText}>Use Offer</Text>
              <Ionicons name="arrow-forward" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.banner}>
          <Ionicons name="gift" size={40} color="#00BAF2" />
          <Text style={styles.bannerTitle}>More Offers Coming Soon!</Text>
          <Text style={styles.bannerText}>
            Stay tuned for more exciting cashback and discount offers
          </Text>
        </View>
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
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  offerCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 16,
    borderRadius: 16,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  offerHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  offerIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  offerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  offerDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    lineHeight: 20,
  },
  offerFooter: {
    marginBottom: 16,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed',
    marginBottom: 8,
  },
  codeLabel: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  code: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BAF2',
    flex: 1,
  },
  validTill: {
    fontSize: 12,
    color: '#999',
    marginLeft: 12,
  },
  useButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 10,
  },
  useButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  banner: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 16,
    padding: 32,
    borderRadius: 16,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
  },
  bannerText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 20,
  },
});
