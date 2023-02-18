import React from 'react';
import styled from "styled-components";
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
const Footer = () => {
 
    return ( 
        <Foter>
       <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/profile.php?id=100010560762487' role='button'>
            <img src='/images/icons8-facebook.svg' alt='social'/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://mrahr.netlify.app/' role='button'>
            <img src='/images/icons8-twitter.svg' alt='social'/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://mrahr.netlify.app/' role='button'>
            <img src='/images/icons8-telegram-app.svg' alt='social'/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://mrahr.netlify.app/' role='button'>
            <img src='/images/icons8-linkedin.svg' alt='social'/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/amit_rakib/' role='button'>
            <img src='/images/icons8-instagram.svg' alt='social'/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://mrahr.netlify.app/!' role='button'>
            <img src='/images/icons8-discord.svg' alt='social'/>
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Send your Opnions</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='text' placeholder='Type something..' label='© Veneto.net' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit'  className='mb-4'>
                  Comment
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            VENETO.net is a Free Movies streaming site with zero ads. We let you watch movies online without having to paying, with over 10000 movies and TV-Series. You can also Download full movies from Veneto.net and watch it later if you want.
          </p>
        </section>

        <section className=''>
            
          <MDBRow>
            
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Trending</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Black Adam
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Disenchanted
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Smile
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Top Gun: Maverick
                  </a>
                </li>
                  <li>
                  <a href='#!' className='text-white'>
                    Thor: Love and Thunder
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    The Woman King
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    The Wonder
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Black Panther: Wakanda Forever
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Latest Movies</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Heart of the Gun
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    The Hitman's Bodyguard
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Need for Speed
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    MIB-III
                  </a>
                </li>
                 <li>
                  <a href='#!' className='text-white'>
                    Peter Rabbit
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    COCO
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    The Last Witch-hunter
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Mad Max
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Latest TV Shows</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    The Rookie: Feds
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    The Winchesters
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    New Amsterdam
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    FBI: Most Wanted
                  </a>
                </li>
                 <li>
                  <a href='#!' className='text-white'>
                    The Mosquito Coast
                  </a>
                </li>
                 <li>
                  <a href='#!' className='text-white'>
                    Echo 3
                  </a>
                </li>
                 <li>
                  <a href='#!' className='text-white'>
                    Sleeping With Death
                  </a>
                </li>
                 <li>
                  <a href='#!' className='text-white'>
                    The Uguly Truth
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Top IMDB Rating</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Bluey
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Planet Earth II
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Breaking Bad
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    The Chosen
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Band of Brothers
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Cosmos
                  </a>
                </li>
                 <li>
                  <a href='#!' className='text-white'>
                    Chernobyl
                  </a>
                </li>
                 <li>
                  <a href='#!' className='text-white'>
                    Band of Brothers
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright: 
        <h3 className='text-white'>
          VENETO.NET
        </h3>
      </div>
      
    </MDBFooter>
    </Foter>
     );
}
 
export default Footer;

const Foter = styled.div`
  padding-top: 50px;
  opacity: 0.7;
  
  a{
    text-decoration: none;
  }
 
`