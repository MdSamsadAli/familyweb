export const Mailing = () => {
    return(
        <>
            <section className="post_section" id="post">
                <div className="w-80">
                    <div className="post_container row">
                        <div className="mailing">
                            <h2>Join Our Mailing List</h2>
                            <div className="input-button">
                                <input type="text" name="name" placeholder="Enter Your Email here *" />
                                <input type="submit" name="button" value="Subscribe Now"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}