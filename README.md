# AutoElite Car Dealership Website

A comprehensive car dealership management website built with HTML, CSS, and JavaScript. This project provides a complete platform for browsing, comparing, and managing car listings with user authentication and dealer management features.

## 🚗 Project Overview

AutoElite is a full-featured car dealership website that allows users to:
- Browse and search for vehicles
- Compare different car models side-by-side
- Schedule test drives
- Calculate payment plans
- Access dealer dashboards
- Manage user accounts and profiles

## 📁 Project Structure

```
new proj2/
├── frontend/              # Frontend files
│   ├── index.html         # Home page
│   ├── cars.html          # Car listings
│   ├── search.html        # Search functionality
│   ├── compare.html       # Car comparison
│   ├── dealerships.html   # Dealer locations
│   ├── testdrive.html     # Test drive scheduling
│   ├── calculator.html    # Payment calculator
│   ├── login.html         # User login
│   ├── register.html      # User registration
│   ├── user-dashboard.html # User account dashboard
│   ├── admin.html         # Admin dashboard
│   ├── dealer-dashboard.html # Dealer dashboard
│   ├── car-details.html   # Individual car details
│   ├── contact.html       # Contact form
│   ├── faq.html           # FAQ section
│   ├── maintenance.html   # Maintenance tips
│   ├── insurance.html     # Insurance information
│   ├── brochures.html     # Car brochures
│   ├── prices.html        # Price updates
│   ├── reviews.html       # Customer reviews
│   ├── upcoming.html      # Upcoming cars
│   ├── blog.html          # Blog section
│   ├── hub.html           # Content hub
│   ├── style.css          # Main stylesheet
│   ├── script.js          # Main JavaScript file
│   └── auth.js            # Authentication logic
├── backend/               # Backend resources
│   └── Ts/                # TypeScript files
├── assets/                # Static assets
│   ├── Images/            # Image files
│   └── brochures/         # Car brochures
├── docs/                  # Documentation
│   ├── 20260429_1777413148-226.pdf
│   ├── FIMC-AutoHero-QuickGuide-1-1.pdf
│   ├── Guide_FirstTimeCarBuying_8.5x11_ACCESSIBLE_FILE.pdf
│   ├── IT-project-ideas.pdf
│   ├── Mercedes-AMG-GT-2024-UK.pdf
│   ├── Mercedes-GLE-GLE-Coupe-2024-UK.pdf
│   ├── S-Class-Saloon.2024pdf.pdf
│   ├── TESLA_M3_PDF.pdf
│   ├── strategy-for-autonomous-driving.pdf
│   └── Young_Researchers_Proceedings_TI_9.pdf
├── .vscode/               # VS Code configuration
├── run.bat                # Project launcher script
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Python 3.x (for local server)
- Modern web browser (Chrome, Firefox, Edge, Safari)

### Installation

1. Clone or download this project to your local machine
2. Navigate to the project directory:
   ```bash
   cd "c:\Users\lenovo\Desktop\final pro اخر حلاوة\final pro\new proj2"
   ```

### Running the Project

#### Option 1: Using the Batch File (Recommended)

Simply double-click the `run.bat` file to launch the project. This will:
- Start a local HTTP server on port 8000
- Open the website in your default browser
- Display the project URL: http://localhost:8000

#### Option 2: Manual Launch

Open a command prompt/terminal and run:
```bash
cd frontend
python -m http.server 8000
```

Then open your browser and navigate to: `http://localhost:8000`

To stop the server, press `Ctrl+C` in the terminal.

## 🎯 Features

### User Features
- **Home Page**: Featured cars and quick navigation
- **Car Catalog**: Browse available vehicles with filters
- **Search**: Advanced search functionality for finding specific cars
- **Compare**: Side-by-side comparison of multiple vehicles
- **Test Drive**: Schedule test drives at local dealerships
- **Calculator**: Payment and financing calculator
- **User Dashboard**: Personal account management
- **Authentication**: Login and registration system

### Admin Features
- **Admin Dashboard**: Manage users and system settings
- **Dealer Dashboard**: Dealer-specific management tools
- **Content Management**: Update car listings and information

### Additional Features
- **FAQ**: Frequently asked questions section
- **Contact**: Contact form and support information
- **Maintenance**: Car maintenance tips and guides
- **Insurance**: Insurance information and resources
- **Brochures**: Downloadable car brochures
- **Price Updates**: Latest pricing information
- **Reviews**: Customer reviews and ratings
- **Upcoming Cars**: Information about upcoming vehicle releases
- **Blog**: Automotive news and articles

## 🔧 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with responsive design
- **Server**: Python HTTP Server (for development)
- **Authentication**: Client-side JavaScript authentication
- **Backend Resources**: TypeScript files in backend directory

## 📱 Responsive Design

The website is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile devices

## 🔐 Authentication

The project includes a complete authentication system with:
- User registration
- Login functionality
- Session management
- Role-based access (User, Admin, Dealer)

## 🌐 Browser Compatibility

Tested and compatible with:
- Google Chrome (recommended)
- Mozilla Firefox
- Microsoft Edge
- Apple Safari

## 📝 Configuration

### Server Port

By default, the server runs on port 8000. To change the port:

1. Open `run.bat` in a text editor
2. Change `8000` to your desired port number
3. Save the file

### Customization

- **Styling**: Modify `frontend/style.css` to change colors, fonts, and layout
- **Content**: Edit HTML files in the `frontend/` directory
- **Functionality**: Update JavaScript files in `frontend/` directory

## 🤝 Contributing

This is a student project. For improvements or bug fixes:
1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Submit your changes for review

## 📄 License

This project is for educational purposes. All rights reserved to the original developers.

## 📞 Support

For questions or issues:
- Check the FAQ section in the website
- Use the contact form on the website
- Review the documentation in the `docs/` directory

## 🎓 Project Information

- **Project Name**: AutoElite Car Dealership Website
- **Type**: Full-Stack Web Application
- **Purpose**: Car dealership management platform
- **Development Year**: 2026

## 🔄 Version History

- **v1.0** - Initial release with core functionality
  - User authentication
  - Car browsing and search
  - Comparison tools
  - Test drive scheduling
  - Payment calculator
  - Admin and dealer dashboards

## 📚 Additional Resources

Documentation and reference materials are available in the `docs/` directory, including:
- Car buying guides
- Vehicle specifications
- Industry reports
- Technical documentation

---

**Note**: This project is designed for educational purposes and demonstrates full-stack web development skills including frontend design, user authentication, and content management systems.
