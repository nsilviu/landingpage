import React, { useState, useEffect } from "react";

const ConsentDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowDialog(true);
    } else if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-YFZS7DYZYV`;
    script.async = true;
    document.head.appendChild(script);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YFZS7DYZYV');
    `;
    document.head.appendChild(script2);
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    loadGoogleAnalytics();
    setShowDialog(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowDialog(false);
  };

  if (!showDialog) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md border-t z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <p className="text-sm">
          Folosim cookie-uri pentru a personaliza conținutul, pentru a oferi
          funcționalități social media si a analiza traficul.
          <a
            href="https://www.porscheinterauto.ro/directiva-privind-fisierele-cookie"
            className="underline ml-2"
          >
            Afla mai multe
          </a>
          .
        </p>
        <div>
          <button
            onClick={handleDecline}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentDialog;
