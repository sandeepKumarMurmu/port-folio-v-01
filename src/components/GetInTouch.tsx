import { CircleX } from 'lucide-react';
import { useToggleStore } from '../store/useThemeStore';

function GetInTouch() {
    const { toggle } = useToggleStore();
    console.log("GetInTouch")
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur flex justify-center items-center">
            <section className="relative w-full max-w-5xl mx-auto p-6 shadow-lg rounded-xl bg-base-300 flex flex-row">

                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 btn btn-sm btn-circle bg-transparent hover:bg-error hover:text-error-content transition-all duration-300 shadow-md"
                    aria-label="Close"
                    onClick={toggle}
                >
                    <CircleX className="w-5 h-5" />
                </button>

                <div className="flex-1 flex items-center justify-center bg-base-200 rounded-xl p-6">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-md">
                            Get in Touch
                        </h2>
                        <p className="text-base text-base-content leading-relaxed max-w-md mx-auto">
                            Have a question, project idea, or just want to say hello? Fill out the form below and I'll get back to you soon!
                        </p>
                    </div>
                </div>

                {/* Vertical separator */}
                <div className="divider divider-horizontal" />

                <form className="space-y-4 flex-1" onSubmit={toggle}>
                    <div>
                        <label className="block text-sm font-semibold text-primary mb-1">
                            Name
                        </label>
                        <input
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
            </section>

        </div>


    )
}

export default GetInTouch