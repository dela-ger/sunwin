# sunwin
recreaeted the sunwin security website with React.
Sunwin Security Services Website
Overview

This is a React-based website for Sunwin Security Services, showcasing their services, process, and company values. The project follows best practices in modern React development and incorporates components for scalability, reusability, and maintainability.

The app is designed to handle both static and dynamic content, with features such as routing for different pages, reusable components, and structured state management.
Features

    Hero Section: Displays the company tagline and highlights their mission.
    Dynamic Components:
        Header and Footer components for consistent navigation and branding.
        CallToAction for customer engagement.
        Sponsors and StatsCard to highlight key partners and achievements.
    Services Page:
        Interactive service cards linking to individual service pages.
    Why Choose Us Section: Outlines the unique value propositions of Sunwin Security Services.
    FAQ Section: Frequently Asked Questions section with collapsible answers.
    Responsive Design: Fully optimized for desktop, tablet, and mobile views.

React Hooks and Their Uses

This project leverages React Hooks to manage state, side effects, and component lifecycle effectively.
1. useState

Manages local state within components. Commonly used for toggling UI elements, storing user inputs, or managing component states.

    Example: Toggling the FAQ answers open and close.

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

2. useEffect

Handles side effects like fetching data or updating the DOM after render.

    Example: Could be used for analytics tracking or dynamically fetching FAQs from an API.

    useEffect(() => {
      console.log("Component mounted or updated");
    }, []);

3. useContext

Provides a way to pass data like theme or user authentication through the component tree without prop drilling.

    Use Case: Share authentication status or user preferences between components.

4. useRef

Accesses DOM elements or stores mutable values that don’t trigger re-renders.

    Use Case: Could be used to manage focus on input fields in forms.

5. useNavigate (React Router Hook)

Handles programmatic navigation between pages.

    Use Case: Navigate users to service details or other pages.
