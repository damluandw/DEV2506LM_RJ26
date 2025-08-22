import React from 'react'
import '../assets/css/lienhe.css'
export default function Contact() {
    return (
        <>
            {/* Begin Banner */}
            <section id="banner-contact">
                <div className="img-banner">
                    <img
                        className="w-100"
                        src="assets/imgs/lienhe-page/lienhe-bg.jpg"
                        alt="lienhe-bg.jpg"
                    />
                </div>
                <div className="box-banner">
                    <div className="logo-banner">
                        <img className="w-100" src="assets/imgs/logo-white.png" alt="logo-white" />
                    </div>
                    <h2 className="title-banner">Liên hệ</h2>
                </div>
            </section>
            {/* End Banner */}
            {/* Begin Liên hệ */}
            <section id="contact-contact">
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-6 contact-left">
                                <div className="img-contact">
                                    <img
                                        className="w-100"
                                        src="assets/imgs/lienhe-page/lienhe.jpg"
                                        alt="lienhe.jpg"
                                    />
                                </div>
                            </div>
                            <div className="col-6 contact-right">
                                <form
                                    action=""
                                    method="post"
                                    encType="multipart/form-data"
                                    id="form"
                                >
                                    <h3>Liên hệ với chúng tôi</h3>
                                    <div className="input-group">
                                        <p className="err err-blank">Họ tên không được để trống</p>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Họ và tên"
                                        />
                                    </div>
                                    <div className="input-group">
                                        <p className="err err-blank">Email không được để trống</p>
                                        <p className="err err-email">
                                            Email không đúng định dạng vui lòng kiểm tra lại
                                        </p>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="input-group">
                                        <p className="err err-blank">
                                            Số điện thoại không được để trống
                                        </p>
                                        <p className="err err-phone">
                                            Số điện thoại không đúng định dạng vui lòng kiểm tra lại
                                        </p>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            placeholder="Số điện thoại"
                                        />
                                    </div>
                                    <div className="input-group">
                                        <p className="err err-blank">Nội dung không được để trống</p>
                                        <input
                                            type="text"
                                            name="content"
                                            id="content"
                                            placeholder="Nội dung"
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        name="submit"
                                        id="submit"
                                        defaultValue="Gửi"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Liên hệ */}
        </>

    )
}
