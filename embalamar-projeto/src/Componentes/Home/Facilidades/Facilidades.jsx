import React from 'react'
import './Facilidades.css'

const Facilidades = () => {
  return (
    <>
    <div>
    <section class=" pb-4 ">
        <h2 class="text-center">Conheça todas nossas facilidades</h2>

        <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 px-3 pt-4" id="facilidades">
            <div class="divs-facilidades  d-flex align-items-center">
                <div><i class="bi bi-x-diamond-fill fs-1"></i></div>
                <div>
                    <div class="ms-3 mb-1">PAGUE PELO PIX</div>
                    <div class="texto-menor ms-3 ">Ganhe 5% OFF em pagamentos via PIX </div>
                </div>
            </div>
            <div class="divs-facilidades d-flex">
                <div><i class="bi bi-cash fs-1"></i></div>
                <div>
                    <div class="ms-3 mb-1">PARCELE EM 6x SEM JUROS</div>
                    <div class="texto-menor ms-3">Fique livre para dividir o valor da sua compra</div>
                </div>
            </div>
            <div class="divs-facilidades d-flex">
                <div><i class="bi bi-flower1 fs-1"></i></div>
                <div>
                    <div class="ms-3 mb-1">SUSTENTABILIDADE</div>
                    <div class="texto-menor ms-3">Somos responsáveis em respeitar o meio ambiente</div>
                </div>
            </div>
        </div>

    </section>
    </div>
    </>
  )
}

export default Facilidades