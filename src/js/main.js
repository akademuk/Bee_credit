/**
 * BeeCredit Main JavaScript
 * Modern ES6+ implementation with performance optimizations
 */

class BeeCredit {
  constructor() {
    this.init();
  }

  init() {
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      this.initCreditRanges();
      this.initCalculatorTabs();
      this.initAccordion();
      this.initFormValidation();
      this.initLazyLoading();
    });
  }

  /**
   * Initialize credit amount ranges with optimized event handling
   */
  initCreditRanges() {
    const ranges = document.querySelectorAll(".credit-form__range");
    
    if (ranges.length === 0) return;

    // Throttle function for performance
    const throttle = (func, delay) => {
      let timeoutId;
      let lastExecTime = 0;
      return function (...args) {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
          func.apply(this, args);
          lastExecTime = currentTime;
        } else {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func.apply(this, args);
            lastExecTime = Date.now();
          }, delay - (currentTime - lastExecTime));
        }
      };
    };

    const updateRangeBackground = (el) => {
      const min = parseInt(el.min) || 0;
      const max = parseInt(el.max) || 100;
      const val = parseInt(el.value);
      const percent = ((val - min) * 100) / (max - min);
      
      el.style.background = `linear-gradient(to right, #ff6f00 ${percent}%, #F5F5F5 ${percent}%)`;
    };

    ranges.forEach((range) => {
      updateRangeBackground(range);
      
      // Use throttled event handler
      const throttledUpdate = throttle(() => updateRangeBackground(range), 16);
      range.addEventListener("input", throttledUpdate, { passive: true });
    });
  }

  /**
   * Initialize calculator tabs with proper accessibility
   */
  initCalculatorTabs() {
    const tabButtons = document.querySelectorAll(".calculator__tab");
    const tabPanels = document.querySelectorAll(".calculator__tab-panel");
    const range = document.getElementById("calculatorCreditAmount");
    const amountInput = document.querySelector(".credit-form__amount");

    if (tabButtons.length === 0 || tabPanels.length === 0) return;

    const setActiveTab = (idx) => {
      tabButtons.forEach((btn, i) => {
        const isActive = i === idx;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-selected", isActive);
        tabPanels[i].classList.toggle("is-active", isActive);
        tabPanels[i].setAttribute("aria-hidden", !isActive);
      });
    };

    // Add ARIA attributes
    tabButtons.forEach((btn, i) => {
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-controls", `tab-panel-${i}`);
      tabPanels[i].setAttribute("id", `tab-panel-${i}`);
      tabPanels[i].setAttribute("role", "tabpanel");
    });

    tabButtons.forEach((btn, i) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        setActiveTab(i);
      });

      // Keyboard accessibility
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActiveTab(i);
        }
      });
    });

    // Range logic
    const formatAmount = (val) => {
      return new Intl.NumberFormat("uk-UA").format(val) + " грн";
    };

    const handleRangeChange = () => {
      if (!range || !amountInput) return;
      
      const value = parseInt(range.value);
      amountInput.value = formatAmount(value);
      
      // Auto-switch tabs based on amount
      if (value > 14000) {
        setActiveTab(1);
      } else {
        setActiveTab(0);
      }
    };

    if (range) {
      range.addEventListener("input", handleRangeChange, { passive: true });
      handleRangeChange(); // Initialize
    }
  }

  /**
   * Initialize accordion functionality
   */
  initAccordion() {
    const accordionItems = document.querySelectorAll(".accordion-item");
    
    accordionItems.forEach((item) => {
      const opener = item.querySelector(".accordion-item__opener");
      const slide = item.querySelector(".accordion-item__slide");
      
      if (!opener || !slide) return;

      opener.setAttribute("aria-expanded", "false");
      slide.setAttribute("aria-hidden", "true");
      
      opener.addEventListener("click", (e) => {
        e.preventDefault();
        
        const isOpen = item.classList.contains("is-active");
        
        // Close all other items
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("is-active");
            const otherOpener = otherItem.querySelector(".accordion-item__opener");
            const otherSlide = otherItem.querySelector(".accordion-item__slide");
            if (otherOpener) otherOpener.setAttribute("aria-expanded", "false");
            if (otherSlide) otherSlide.setAttribute("aria-hidden", "true");
          }
        });
        
        // Toggle current item
        item.classList.toggle("is-active", !isOpen);
        opener.setAttribute("aria-expanded", !isOpen);
        slide.setAttribute("aria-hidden", isOpen);
      });
    });
  }

  /**
   * Initialize form validation
   */
  initFormValidation() {
    const forms = document.querySelectorAll("form");
    
    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        if (!this.validateForm(form)) {
          e.preventDefault();
        }
      });
    });
  }

  /**
   * Validate form fields
   */
  validateForm(form) {
    let isValid = true;
    const fields = form.querySelectorAll("input[required], select[required], textarea[required]");
    
    fields.forEach((field) => {
      if (!field.value.trim()) {
        this.showFieldError(field, "Це поле обов'язкове");
        isValid = false;
      } else if (field.type === "email" && !this.isValidEmail(field.value)) {
        this.showFieldError(field, "Введіть коректну email адресу");
        isValid = false;
      } else {
        this.clearFieldError(field);
      }
    });
    
    return isValid;
  }

  /**
   * Show field error
   */
  showFieldError(field, message) {
    this.clearFieldError(field);
    
    const error = document.createElement("div");
    error.className = "field-error";
    error.textContent = message;
    error.setAttribute("role", "alert");
    
    field.classList.add("error");
    field.parentNode.appendChild(error);
  }

  /**
   * Clear field error
   */
  clearFieldError(field) {
    field.classList.remove("error");
    const existingError = field.parentNode.querySelector(".field-error");
    if (existingError) {
      existingError.remove();
    }
  }

  /**
   * Validate email format
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Initialize lazy loading for images
   */
  initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new BeeCredit());
} else {
  new BeeCredit();
}
