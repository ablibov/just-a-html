import React, { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import styled from "styled-components"
import "../styles/Home.css"

function Home() {
  const phones = [
    {
      name: "iPhone 15",
      img: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-color-lineup-230912_big.jpg.large_2x.jpg",
      smimg: "https://ispace.az/ru/product/iphone-15-128-gb-pink-mtp13hxa?srsltid=AfmBOoqyrhmbtFb3I2bDsp7TWZ97OVtJwASUDCr82lV4fG6MunAgPEUt",
      price: "999$",
    },
    {
      name: "Xiaomi 17 Ultra",
      img: "https://i02.appmifile.com/475_operatorx_operatorx_uploadTiptapImage/25/12/2025/7034e9aba97713b6b4626d280bbe4708.png",
      smimg: "https://i02.appmifile.com/475_operatorx_operatorx_uploadTiptapImage/25/12/2025/7034e9aba97713b6b4626d280bbe4708.png",
      price: "899$",
    },
    {
      name: "Samsung S24 Ultra",
      img: "https://images.samsung.com/is/image/samsung/assets/ae/smartphones/galaxy-s24-ultra/buy/03_S24Ultra-GalaxyAI-KV_PC.jpg?imbypass=true",
      smimg: "https://images.samsung.com/is/image/samsung/assets/ae/smartphones/galaxy-s24-ultra/buy/03_S24Ultra-GalaxyAI-KV_PC.jpg?imbypass=true",
      price: "1199$",
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false },
    [Autoplay({ delay: 3000 })]
  )

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.plugins().autoplay?.play()
  }, [emblaApi])

  return (
    <Container>
      <Title>Home</Title>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {phones.map((phone, index) => (
              <div className="embla__slide" key={index}>
                <div className="slide-card">
                  <img src={phone.img} alt={phone.name} />
                  <div className="slide-info">
                    <h3>{phone.name}</h3>
                    <p>{phone.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__buttons">
          <button onClick={goToPrev}>‹</button>
          <button onClick={goToNext}>›</button>
        </div>
      </div>

              {/* Phone Cards */}
        <CardsWrapper>
          {phones.map((phone, index) => (
            <Card key={index}>
              <CardImage src={phone.img} alt={phone.name} />
              <CardTitle>{phone.name}</CardTitle>
              <CardPrice>{phone.price}</CardPrice>
            </Card>
          ))}
        </CardsWrapper>

    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Google Sans Flex", sans-serif;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`
const CardsWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  width: 100%;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  margin: 10px 0 5px;
`;

const CardPrice = styled.p`
  font-weight: bold;
  color: #0071e3;
`;

export default Home
