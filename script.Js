function contactUs() {

    let phoneNumber = "919837658893";

    let message = "Hello Amaan Furni&Home, I am interested in your furniture designs.";

    let whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}