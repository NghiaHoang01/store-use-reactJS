import Header from "../../component/header"
import "./Style.css"

const StoreSystem = () => {
    return <>
    <Header page={"Hệ thống cửa hàng"}/>
    {/* <!--body--> */}
        <div class="store">
            <div class="store-title">
                <p>Hệ thống cửa hàng</p>
            </div>
            <div class="store-list">
                <div class="store-list__system">
                    <ul>
                        <li>
                            <input type="radio" id="map1" name="radio"
                                   value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125364.82364784039!2d106.8741417!3d10.9141257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d952b84aea25%3A0x2111cd93cb5263cb!2zVHAuIEJpw6puIEjDsmEsIMSQ4buTbmcgTmFp!5e0!3m2!1svi!2s!4v1671760491847!5m2!1svi!2s"/>
                            <label for="map1">1. Fashion Shoes Biên Hòa</label>
                        </li>
                        <li>
                            <input type="radio" id="map2" name="radio"
                                   value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.988390095114!2d105.81945407689199!3d21.02273870408994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1671760533734!5m2!1svi!2s"/>
                            <label for="map2">2. Fashion Shoes Hà Nội</label>
                        </li>
                        <li>
                            <input type="radio" id="map3" name="radio"
                                   value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501726.4604545216!2d106.41503148821144!3d10.75466639675376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1671760600030!5m2!1svi!2s"/>
                            <label for="map3">3. Fashion Shoes Hồ Chí Minh</label>
                        </li>
                        <li>
                            <input type="radio" id="map4" name="radio"
                                   value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62719.35685987305!2d106.69332279301221!3d10.73758149098764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752560b050b093%3A0x6dcb89c51055ccc9!2zUXXhuq1uIDcsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1671760638371!5m2!1svi!2s"/>
                            <label for="map4">4. Fashion Shoes Quận 7</label>
                        </li>
                        <li>
                            <input type="radio" id="map5" name="radio"
                                   value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.988390095114!2d105.81945407689199!3d21.02273870408994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1671760533734!5m2!1svi!2s"/>
                            <label for="map5">5. Fashion Shoes Thăng Long</label>
                        </li>
                        <li>
                            <input type="radio" id="map6" name="radio"
                                   value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245368.2610493155!2d107.93803995189467!3d16.07176349282207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0x1df0cb4b86727e06!2zxJDDoCBO4bq1bmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1671760723685!5m2!1svi!2s"/>
                            <label for="map6">6. Fashion Shoes Vincom Đà Nẵng</label>
                        </li>
                    </ul>
                </div>

                <div class="store-list__map">
                    <iframe id="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125364.82364784039!2d106.8741417!3d10.9141257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d952b84aea25%3A0x2111cd93cb5263cb!2zVHAuIEJpw6puIEjDsmEsIMSQ4buTbmcgTmFp!5e0!3m2!1svi!2s!4v1671760491847!5m2!1svi!2s"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>

        {/* Thiếu JS */}
    </>
}

export default StoreSystem