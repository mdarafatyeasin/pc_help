import React from 'react';

const Connect = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 mt-20 mb-20">
                <div class="hero-content flex-col lg:flex-row-reverse w-[80%]">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">BUSINESS INQUIRES</h1>
                        <p class="py-6">For the purpose of providing services to our customers, and assess statistical information for the implementation of personalized website features, emails of notifications, we may use your personal information. On some occasions we may share your information with Dartekr authorized sales channel and business contractors. By clicking submit you are agreeing to Dartek's site terms & conditions and privacy policy.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Write your inquire here</span>
                                </label>
                                <input type="text" placeholder="Write something inquire about us" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;