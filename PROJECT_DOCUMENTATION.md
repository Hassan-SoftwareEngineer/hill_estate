# Hill Estate - Real Estate Investment Platform

## Project Overview
Hill Estate is a modern real estate investment platform that allows users to invest in properties through tokenization. The platform features wallet integration, property selection, investment tracking, and a comprehensive property management system.

## Technology Stack

### Frontend Technologies
- **Next.js 16.0.10** - React framework for production-ready applications
- **React 19.2.1** - Modern React with latest features
- **TypeScript 5** - Type-safe JavaScript development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/UI Components** - High-quality, accessible UI components

### Key Frontend Libraries
- **@tanstack/react-query** - Server state management and API caching
- **@radix-ui/react-slider** - Accessible slider component for area selection
- **embla-carousel-react** - Smooth carousel implementation
- **sonner** - Professional toast notifications
- **react-icons** - Comprehensive icon library
- **clsx & tailwind-merge** - Dynamic className utilities
- **MetaMask** - Ethereum wallet integration for Web3 functionality

### Backend Technologies
- **Node.js** - JavaScript runtime environment
- **Express.js 5.2.1** - Web application framework
- **ES6 Modules** - Modern JavaScript module system
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Architecture & Design Patterns

### Frontend Architecture

#### 1. Atomic Design Pattern (Brad Frost)
The project follows atomic design methodology for component organization:

```
components/
├── atoms/           # Basic building blocks
├── molecules/       # Groups of atoms
└── organisms/       # Complex UI sections
```

**Benefits:**
- **Reusability** - Components can be reused across different sections
- **Maintainability** - Clear separation of concerns
- **Scalability** - Easy to add new components following the same pattern
- **Consistency** - Uniform design system across the application

#### 2. Custom CSS Variables & Global Styles
Defined in `globals.css` for consistent theming:

```css
@theme {
  --color-surface-primary: #0C091D;
  --color-surface-secondary: #922A8E;
}

.gradient-primary {
  background: linear-gradient(to right, #932A8E, #3A5DAC);
}
```

**Advantages:**
- **Consistency** - Unified color scheme across components
- **Maintainability** - Easy to update themes globally
- **Performance** - Reduced CSS bundle size through reusable classes

#### 3. State Management Patterns

**Lifting State Up (Property Selector & Area Analyzer):**
```typescript
const [area, setArea] = useState(1);
<PropertySelector area={area} setArea={setArea} />
```

**Context API (Wallet State Management):**
```typescript
const { isConnected, walletAddress, connectWallet } = useWallet();
```

#### 4. React Query Integration
Server state management with caching and error handling:

```typescript
const { mutate: connectWallet, isLoading: isConnecting } = useMutation({
  mutationFn: walletService.connect,
  onSuccess: (data) => {
    setWalletAddress(data.walletAddress);
    toast.success('Connected!');
  }
});
```

### Backend Architecture

#### 1. Modular Folder Structure
```
server/src/
├── controllers/     # Request handling logic
├── services/        # Business logic layer
├── routes/          # API route definitions
├── middlewares/     # Custom middleware functions
├── requests/        # Input validation classes
├── utils/           # Utility functions
└── app.js          # Application configuration
```

#### 2. Response Standardization
**Dynamic Response Handler:**
```javascript
static send(res, success, message, statusCode, data = null, errors = null) {
  return res.status(statusCode).json({
    success, message, ...(data && { data }), timestamp: new Date().toISOString()
  });
}
```

**Benefits:**
- **Consistency** - All API responses follow the same structure
- **DRY Principle** - No code repetition
- **Flexibility** - Easy to extend for new response types

#### 3. Request Validation Layer
**Modular Validation Classes:**
```javascript
export class WalletRequest {
  static validateConnect(body) {
    const errors = {};
    if (!body.walletAddress) {
      errors.walletAddress = 'Wallet address is required';
    }
    return { isValid: Object.keys(errors).length === 0, errors };
  }
}
```

#### 4. Error Handling Middleware
```javascript
export const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return ResponseUtils.validationError(res, err.errors, err.message);
  }
  return ResponseUtils.serverError(res, err.message);
};
```

## Key Features Implementation

### 1. MetaMask Wallet Integration
- **MetaMask Browser Extension** - Direct integration with MetaMask wallet
- **Ethereum Address Validation** - Secure wallet address format validation
- **Connection State Management** - Context API for global wallet state
- **State Persistence** - localStorage for wallet session persistence
- **Toast Notifications** - User feedback for wallet connect/disconnect actions
- **Modal Management** - Professional wallet connection UI with MetaMask detection
- **Auto-Detection** - Automatic MetaMask installation detection and guidance

### 2. Property Investment System
- **Area Selection Slider** - Interactive property area selection (1-100 sqft)
- **Real-time Price Calculation** - Dynamic pricing based on selected area
- **Investment Cards** - Visual representation of investment benefits
- **Process Timeline** - Step-by-step investment process

### 3. Responsive Design
- **Mobile-First Approach** - Optimized for all screen sizes
- **Tablet Optimization** - Perfect layout for tablet devices
- **Desktop Enhancement** - Full-featured desktop experience

### 4. Professional UI Components
- **Hero Carousel** - Ultra HD property images with navigation
- **Gradient Theming** - Consistent purple-to-blue gradient design
- **Interactive Elements** - Hover effects and smooth transitions
- **Accessibility** - ARIA labels and keyboard navigation

## Industry Standards & Best Practices

### Frontend Best Practices
1. **Component Composition** - Atomic design for scalable architecture
2. **Type Safety** - TypeScript for robust development
3. **Performance Optimization** - React Query for efficient data fetching
4. **Responsive Design** - Mobile-first CSS approach
5. **Code Splitting** - Next.js automatic code splitting
6. **SEO Optimization** - Server-side rendering with Next.js

### Backend Best Practices
1. **Separation of Concerns** - Clear layer separation (controllers, services, validation)
2. **Input Validation** - Dedicated validation classes for each module
3. **Error Handling** - Centralized error management
4. **Response Standardization** - Consistent API response format
5. **Environment Configuration** - Secure environment variable management
6. **Modular Architecture** - Easy to scale and maintain

## How to Run the Project

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Frontend Setup
```bash
cd client
npm install
npm run dev        # Development server
npm run build      # Production build
npm start          # Production server
```

### Backend Setup
```bash
cd server
npm install
npm run dev        # Development server
npm start          # Production server
```

### Environment Variables
**Server (.env):**
```
PORT=5000
API_PREFIX=/api/v1
```

### Development URLs
- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:5000
- **API Base:** http://localhost:5000/api/v1

## Project Structure Benefits

### Scalability
- **Modular Components** - Easy to add new features
- **Atomic Design** - Reusable component library
- **Layered Backend** - Clear separation for business logic

### Maintainability
- **TypeScript** - Type safety reduces bugs
- **Consistent Patterns** - Standardized code structure
- **Global Styles** - Centralized theme management

### Performance
- **React Query** - Efficient data fetching and caching
- **Next.js** - Automatic code splitting and optimization
- **Custom CSS Variables** - Reduced bundle size and faster rendering