# PayNow App

A React Native payment application built with Expo and TypeScript.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn package manager
- Expo CLI (will be installed with dependencies)

## Installation

1. Clone the repository

```bash
git clone https://github.com/Ashish-Mourya/App-UI-Paytm.git
cd App-UI-Paytm/paynow
```

2. Install dependencies

```bash
npm install
```

## Running the Application

### Development Mode

Start the development server:

```bash
npm start
```

This will open the Expo Developer Tools in your browser. From there, you can:
- Press 'w' to open in web browser
- Press 'a' to open in Android emulator
- Press 'i' to open in iOS simulator
- Scan QR code with Expo Go app on your mobile device

### Platform-Specific Commands

Run on Android:
```bash
npm run android
```

Run on iOS:
```bash
npm run ios
```

Run on Web:
```bash
npm run web
```

## Project Structure

```
paynow/
├── app/                    # Main application screens
│   ├── (tabs)/            # Tab-based navigation screens
│   │   ├── index.tsx      # Home screen
│   │   ├── offer.tsx      # Offers screen
│   │   ├── payment.tsx    # Payment screen
│   │   └── profile.tsx    # Profile screen
│   └── _layout.tsx        # Root layout configuration
├── components/            # Reusable components
├── page-components/       # Screen-specific components
├── constants/            # App constants and theme
├── hooks/               # Custom React hooks
└── assets/             # Images and static files
```

## Features

- Tab-based navigation
- Payment functionality
- Offers and deals
- User profile management
- Responsive design for multiple platforms

## Technologies Used

- React Native
- Expo
- TypeScript
- Expo Router for navigation
- React Native Reanimated for animations

## Development

The app uses file-based routing provided by Expo Router. To add new screens:
1. Create a new file in the `app` directory
2. The file name becomes the route path
3. Export a default React component

## Building for Production

To create a production build:

```bash
npm run build
```

For platform-specific builds, refer to the Expo documentation:
https://docs.expo.dev/build/introduction/

## Troubleshooting

If you encounter issues:
1. Clear cache: `npm start -- --clear`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Reset Expo cache: `npx expo start -c`

## License

This project is licensed under the MIT License.

## Repository

https://github.com/Ashish-Mourya/App-UI-Paytm
