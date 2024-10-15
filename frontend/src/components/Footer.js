export default function Footer() {
    return (
        <footer className="py-4 bg-secondary text-white">
            <div className="container">
                <div className="row">
                    {/* Company Information Section */}
                    <div className="col-md-4">
                        <h5>About GPMcart</h5>
                        <p>
                            GPMcart is a leading e-commerce platform providing a wide range of products 
                            to cater to your needs. We are dedicated to offering the best shopping experience.
                        </p>
                    </div>
                    
                    {/* Contact Information Section */}
                    <div className="col-md-4">
                        <h5>Contact Information</h5>
                        <ul>
                            <li><strong>Email:</strong> support@gpmcart.com</li>
                            <li><strong>Phone:</strong> +1-234-567-8900</li>
                            <li><strong>Customer Support:</strong> +1-800-123-4567</li>
                        </ul>
                    </div>

                    {/* Address Section */}
                    <div className="col-md-4">
                        <h5>Our Address</h5>
                        <p>
                            GPMcart Headquarters<br />
                            1234 Market Street, Suite 100<br />
                            San Francisco, CA 94103<br />
                            United States
                        </p>
                    </div>
                </div>
                
                <hr className="bg-light" />
                
                {/* Footer Bottom Section */}
                <p className="text-center mt-3">
                    GPMcart - 2023-2024, All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
