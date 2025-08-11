# BreatheBook - Mindful Breathing App

## Overview

BreatheBook is a mindful breathing application designed to provide users with inner peace and mental clarity through guided breathing exercises. The app features a premium minimalist landing page with modern dark gradient design inspired by contemporary SaaS platforms, advanced glass-morphism UI effects, multi-language support (English, Russian, Spanish, French), and separate legal document pages with dynamic URL routing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Modern React 18 application with full TypeScript support for type safety
- **Vite Build System**: Fast development server and optimized production builds with hot module replacement
- **Wouter Routing**: Lightweight client-side routing solution for single-page application navigation
- **TanStack React Query**: Powerful data synchronization and caching library for API state management
- **React Hook Form**: Performant forms with easy validation and minimal re-renders

### UI and Styling
- **shadcn/ui Components**: Comprehensive component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Glass Morphism Design**: Modern aesthetic with backdrop filters and translucent effects
- **Dark Theme**: Sophisticated dark color scheme with CSS custom properties

### Backend Architecture
- **Express.js Server**: RESTful API server with middleware support
- **TypeScript**: Full-stack type safety with shared schema definitions
- **Modular Storage Interface**: Abstracted storage layer supporting multiple implementations
- **Memory Storage**: In-memory data storage for development and testing

### Database and Data Management
- **Drizzle ORM**: Type-safe database toolkit with schema-first approach
- **PostgreSQL**: Production database with full SQL support via connection string
- **Neon Database**: Serverless PostgreSQL integration for scalable data storage
- **Schema Validation**: Zod-based runtime type checking and validation

### Development and Deployment
- **Replit Integration**: Optimized for Replit development environment
- **ESM Modules**: Modern JavaScript module system throughout the stack
- **Path Aliases**: Clean import paths with TypeScript path mapping
- **Development Middleware**: Hot reload, error overlays, and debugging tools

### Code Organization
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Shared Schema**: Common TypeScript types and validation schemas
- **Component Organization**: Hierarchical UI components with clear separation of concerns
- **Feature-Based Architecture**: Organized by functionality rather than technical layers

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **PostgreSQL**: Relational database engine for data persistence

### UI and Component Libraries
- **Radix UI**: Comprehensive set of accessible UI primitives
- **shadcn/ui**: Pre-built component library with customizable styling
- **Lucide React**: Modern icon library with React components

### Development Tools
- **Replit Cartographer**: Code mapping and navigation for Replit environment
- **Vite Plugins**: Runtime error overlays and development enhancements
- **PostCSS**: CSS processing with Tailwind CSS integration

### Utility Libraries
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **date-fns**: Date manipulation and formatting utilities
- **clsx/tailwind-merge**: Conditional CSS class composition
- **nanoid**: Unique ID generation for client-side operations

### Language and Internationalization
- **Multi-language Support**: Built-in translation system for English, Russian, Spanish, and French
- **Custom Translation Engine**: Lightweight internationalization without external libraries
- **Dynamic Legal Documents**: Privacy policy and terms of use with language-specific content

### Premium Features (Added August 2025)
- **Modern SaaS Design**: Contemporary dark theme inspired by Datafast and Aurix platforms
- **Advanced Glass Effects**: Sophisticated glass-morphism with multi-layered backgrounds
- **Dynamic URL Routing**: Separate pages for privacy policy and terms with language parameters
- **App Store Integration**: Download button with external link to App Store
- **Clean Aesthetics**: Ultra-minimal typography and modern gradient backgrounds