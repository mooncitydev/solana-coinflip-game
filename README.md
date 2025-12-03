# S7NS Coinflip 🪙

A professional, decentralized coinflip game built on Solana blockchain. Place bets on heads or tails and double your SOL or lose it all!

![Solana](https://img.shields.io/badge/Solana-14F46B?style=for-the-badge&logo=solana&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Anchor](https://img.shields.io/badge/Anchor-0.29.0-14F46B?style=for-the-badge&logo=solana&logoColor=white)

## 🎮 Features

- **Decentralized Gaming**: Built on Solana blockchain with smart contracts
- **Fair & Transparent**: Results determined by on-chain slot numbers
- **Multiple Bet Sizes**: Choose from 0.05, 0.1, 0.25, 0.5, 1, or 2 SOL
- **Real-time Updates**: Live transaction history and game results
- **Secure Wallet Integration**: Support for Phantom, Solflare, Slope, and more
- **Modern UI/UX**: Beautiful, responsive interface with smooth animations
- **Transaction History**: View recent plays and results

## 🏗️ Architecture

This project consists of three main components:

### 1. **Smart Contract** (`/contract`)
- Built with Anchor framework (Rust)
- Handles game logic, randomness, and fund management
- Program ID: `G9H8d5s4cRKXUbiEg6XVSNHKiZXCEYMZw4WcN4YW4iUp`

### 2. **Frontend** (`/frontend`)
- Next.js 14 with React 18
- TypeScript for type safety
- Solana wallet adapter integration
- Real-time UI updates

### 3. **Backend** (`/backend`)
- Express.js server
- Socket.io for real-time updates
- Transaction monitoring and history

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Rust and Anchor CLI (for contract development)
- Solana CLI tools
- A Solana wallet (Phantom, Solflare, etc.)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/s7ns-coinflip.git
cd s7ns-coinflip
```

#### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
# or
yarn install
```

#### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
# or
yarn install
```

#### 4. Install Contract Dependencies

```bash
cd ../contract
npm install
# or
yarn install
```

### Configuration

#### Frontend Configuration

Update `frontend/src/contexts/type.ts` with your RPC endpoint:

```typescript
export const RPC_MAINNET = "your-mainnet-rpc-endpoint"
export const RPC_DEVNET = "your-devnet-rpc-endpoint"
export const RPC_CURRENT = RPC_MAINNET; // or RPC_DEVNET
```

#### Backend Configuration

Create a `.env` file in the backend directory:

```env
PORT=3002
MONGODB_URI=your-mongodb-connection-string
SOLANA_NETWORK=your-solana-rpc-endpoint
```

#### Contract Configuration

Update `contract/Anchor.toml` with your wallet path and network settings.

### Running the Application

#### Development Mode

**Frontend:**
```bash
cd frontend
npm run dev
# or
yarn dev
```

**Backend:**
```bash
cd backend
npm run dev
# or
yarn dev
```

#### Production Build

**Frontend:**
```bash
cd frontend
npm run build
npm start
```

**Backend:**
```bash
cd backend
npm run build
npm start
```

## 🎯 How to Play

1. **Connect Wallet**: Click "Select Wallet" and connect your Solana wallet
2. **Choose Side**: Select Heads or Tails
3. **Set Bet Amount**: Choose your bet size (0.05 - 2 SOL)
4. **Place Bet**: Click "Double or nothing" to start the game
5. **Wait for Result**: The coin will flip and reveal the result
6. **Win or Lose**: 
   - **Win**: Double your bet amount is added to your claimable rewards
   - **Lose**: Your bet amount is lost
7. **Claim Rewards**: Click "Claim" to withdraw your winnings

## 🔒 Security

- All game logic is executed on-chain via Solana smart contracts
- Results are determined by blockchain slot numbers (provably fair)
- Funds are held in program-derived addresses (PDAs)
- Only the contract owner can withdraw from the vault

## 📊 Game Mechanics

The game uses different win probabilities based on bet size:

- **0.05, 0.1 SOL**: ~47.5% win rate
- **0.25, 0.5 SOL**: ~40% win rate
- **1 SOL**: ~25% win rate
- **2 SOL**: ~16.67% win rate

Results are determined by: `slot_number % 2 == chosen_side` with additional modifiers for different bet sizes.

## 🛠️ Tech Stack

- **Blockchain**: Solana
- **Smart Contracts**: Anchor Framework (Rust)
- **Frontend**: Next.js 14, React 18, TypeScript
- **Backend**: Express.js, Socket.io, TypeScript
- **Wallet Integration**: @solana/wallet-adapter
- **Styling**: SCSS, Material-UI
- **State Management**: React Hooks

## 📝 Project Structure

```
s7ns-coinflip/
├── contract/          # Solana smart contract (Anchor)
│   ├── programs/
│   │   └── coinflip/
│   ├── tests/
│   └── migrations/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   └── styles/
│   └── public/
├── backend/           # Express.js backend server
│   └── src/
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact & Support

- **Telegram**: [@moooncity](https://t.me/moooncity)

## ⚠️ Disclaimer

This is a gambling application. Please gamble responsibly. Only bet what you can afford to lose. The developers are not responsible for any losses incurred while using this application.

## 🙏 Acknowledgments

- Solana Foundation for the amazing blockchain
- Anchor team for the developer framework
- All the open-source contributors

---

**Built with ❤️ on Solana**
