import { CircleX } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToggleStore, useLoaderStor } from '../store/useThemeStore';
import { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

function GetInTouch() {
    const { toggle } = useToggleStore();
    const { toggleLoader } = useLoaderStor();
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

    const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handeSubmit = (e: any) => {
        e.preventDefault();
        const { name, email, message } = formData;
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        const contact = {
            from_name: name,
            to_name: "Sandeep Kumar Murmu",
            from_email: email,
            message: message,
        };

        const YOUR_SERVICE_ID = 'service_an0kytq';
        const YOUR_TEMPLATE_ID = 'template_glc5j5t';
        const YOUR_PUBLIC_KEY = 's5atsh22w0zsJ6HWM';

        toggleLoader(true); // Show loader

        emailjs
            .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, contact, {
                publicKey: YOUR_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toggleLoader(false); // Hide loader
                    toggle(); // Close the popup
                    setFormData({ name: '', email: '', message: '' }); // Reset form data
                }
            ).catch((error) => {
                console.error('Failed to send email:', error);
                alert('Failed to send email. Please try again later.');
                toggleLoader(false); // Hide loader
            }).finally(() => {
                toggleLoader(false); // Hide loader
            });

    }

    return (
        <>
            <div className='fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur flex justify-center items-center px-4'>
                <section className='w-full max-w-[1440px] mx-auto p-4 shadow-lg rounded-xl bg-base-300 flex flex-col'>
                    <div className='flex items-center '>
                        <button
                            className="top-4 right-4 btn btn-sm btn-circle bg-transparent border-0 shadow-none transition-transform duration-300 hover:rotate-90"
                            aria-label="Close"
                            onClick={toggle}
                        >
                            <CircleX className="w-5 h-5" />
                        </button>
                    </div>
                    <div className='w-full grid lg:grid-cols-2 items-center'>
                        <div className='text-center'>
                            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-md">
                                Get in Touch
                            </h2>
                            <p className="text-base text-base-content leading-relaxed max-w-md mx-auto">
                                Have a question, project idea, or just want to say hello? Fill out the form below and I'll get back to you soon!
                            </p>
                        </div>
                        <div>
                            <form className="space-y-4 flex-1" onSubmit={handeSubmit}>
                                <div>
                                    <label className="block text-sm font-semibold text-primary mb-1">
                                        Name
                                    </label>
                                    <input
                                        name="name"
                                        onChange={handelChange}
                                        value={formData.name}
                                        type="text"
                                        placeholder="Your full name"
                                        className="input input-bordered input-primary w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-primary mb-1">
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        onChange={handelChange}
                                        value={formData.email}
                                        type="email"
                                        placeholder="you@example.com"
                                        className="input input-bordered input-primary w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-primary mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        onChange={handelChange}
                                        value={formData.message}
                                        placeholder="Tell me about your project or message..."
                                        className="textarea textarea-primary w-full resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-full"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default GetInTouch