import styled from "styled-components";

export const Wrapper = styled.div`
  main {
    max-width: 400px;
    max-height: 700px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto;

    margin-top: 20px;
  }

  .header,
  form,
  .result {
    margin: 16px;
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      height: 180px;
      width: 180px;
      display: flex;
      flex-direction: column;
      margin: auto;
    }

    p {
      font-weight: 600;
      font-size: 22px;
      margin: 12px;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    border-style: hidden;

    label {
      text-align: left;
    }
    input {
      padding: 8px;
      background-color: #eee;
      color: #282828;
      border-radius: 8px;
      border: 0;
      outline: 0;
      :focus {
        outline: none !important;
      }
    }

    .input_alcohol {
      margin-bottom: 8px;
    }

    button {
      margin-top: 8px;
      background: #fc00ff; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #00dbde,
        #fc00ff
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        #00dbde,
        #fc00ff
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      border: 0;
      padding: 8px;
      border-radius: 8px;
      font-weight: 600;

      &:hover {
        color: #00dbde;
        background-color: #00dbde ;
      }
    }
  }

  .result {
    max-width: 300px;
    margin: auto;
    background-color: #008000;
    margin-top: 16px;
    border-radius: 8px;
    padding: 8px;
    /* animation-name: myAnim;
    animation-duration: 2s; */

    .message {
      font-size: 18px;
      font-weight: 600;
    }

    &:hover{
      animation-name: myAnim;
    animation-duration: 2s;
    }
  }

  @keyframes myAnim {
    0%,
    50%,
    100% {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0;
    }
  }
`;
