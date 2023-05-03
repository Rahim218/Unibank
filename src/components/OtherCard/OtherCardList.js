import React from 'react'




function OtherCardList() {
    const debetCards = [
        {
            id: 6,
            card_url: 'https://unibank.az/uploads/items/o_1ghgjt81a1i0rnkomn1vmh1iuda.gif',
            card_name: "Albalı Debet",
            description: 'Bu kartla dünyanın hər bir nöqtəsində rahat alış-veriş, onlayn ödənişlər et və ya rahat nağd pul çıxar. ',
            itemCount: 1,
            price: 8.99
        },
        {
            id: 7,
            card_url: 'https://unibank.az/uploads/items/o_1g5lkqkchjtp1ejd1tbn1igf17c8a.jpg',
            card_name: "Albalı",
            description: 'Albalı - 4 bank məhsulunu (kredit, taksit kartı, depozit və debet kartı) özündə birləşdirən beynəlxalq kartdır. ',
            itemCount: 1,
            price: 12.99
        },
        {
            id: 8,
            card_url: 'https://unibank.az/uploads/items/o_1geemnr0j10bv12dqj8r6f016qea.gif',
            card_name: "UCard Gift",
            description: 'UCard Gift-ən çox arzulanan hədiyyə! UCard Gift kartını hədiyyə et! ',
            itemCount: 1,
            price: 9.99
        },
        {
            id: 9,
            card_url: '	https://unibank.az/uploads/items/o_1g4runv8p1phn1o0p1f1ager1niia.jpg',
            card_name: "Digital card",
            description: "Artıq kart sifarişi üçün banka gəlməyə ehtiyac yoxdur. Bu kart ilə hesab açmadan UBank-da, müxtəlif İnternet saytlarda bütün ödənişlərini rahatlıqla edə bilərsən. ",
            itemCount: 1,
            price: 11.99
        }


    ]       

    const addToBasket = (event) => {
        let id = event.target.getAttribute('data-id');
        var data = debetCards.find(pr => pr.id == id);
        let wishlistLocal = JSON.parse(localStorage.getItem('basket'))
        if (wishlistLocal != null) {
            if (wishlistLocal.find(pr => pr.id == id) == undefined) {
                wishlistLocal.push(data);
            }
            else {
                let elem = wishlistLocal.find(pr => pr.id == id)
                elem.itemCount = Number(elem.itemCount) + 1
            }
            localStorage.setItem("basket", JSON.stringify(wishlistLocal));
        } else {

            localStorage.setItem("basket", JSON.stringify([data]));
        }


    }

  






    return (
        <div>
            <div className="debetcards ">

                <div className="debetcard-content row align-items-center  g-4">
                    {
                        debetCards.map((item) => {
                            return (
                                <div className="col-lg-6 col-12">
                                    <div className="card-box">
                                        <div className="card-photo">
                                            <img src={item.card_url} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h2>{item.card_name}</h2>
                                            <p>{item.description}</p>
                                            <button onClick={addToBasket} data-id={item.id}>Add basket</button>
                                        </div>

                                    </div>

                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OtherCardList
