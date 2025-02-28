import { AboutItem } from '../../AboutItem/aboutItem';
import './style.scss';

export const About = () => {

  const questionAnswers = [
    {
      question: "Why should you choose Nova Constructions?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
      Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
      Sed rhoncus, tortor sed eleifend tristique, tortor mauris. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Repellat eum molestias reprehenderit! 
      Et, quia. Saepe aspernatur dolores dolor magnam quasi 
      tempora sint cupiditate aut magni corrupti ipsam, ad numquam in.`
    },
    {
      question: "Why should you choose Nova Constructions?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
      Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
      Sed rhoncus, tortor sed eleifend tristique, tortor mauris. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Repellat eum molestias reprehenderit! 
      Et, quia. Saepe aspernatur dolores dolor magnam quasi 
      tempora sint cupiditate aut magni corrupti ipsam, ad numquam in.`
    },
    {
      question: "Why should you choose Nova Constructions?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
      Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
      Sed rhoncus, tortor sed eleifend tristique, tortor mauris. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Repellat eum molestias reprehenderit! 
      Et, quia. Saepe aspernatur dolores dolor magnam quasi 
      tempora sint cupiditate aut magni corrupti ipsam, ad numquam in.`
    },
    {
      question: "Why should you choose Nova Constructions?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
      Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
      Sed rhoncus, tortor sed eleifend tristique, tortor mauris. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Repellat eum molestias reprehenderit! 
      Et, quia. Saepe aspernatur dolores dolor magnam quasi 
      tempora sint cupiditate aut magni corrupti ipsam, ad numquam in.`
    },
    {
      question: "Why should you choose Nova Constructions?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
      Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
      Sed rhoncus, tortor sed eleifend tristique, tortor mauris. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Repellat eum molestias reprehenderit! 
      Et, quia. Saepe aspernatur dolores dolor magnam quasi 
      tempora sint cupiditate aut magni corrupti ipsam, ad numquam in.`
    },
    {
      question: "Why should you choose Nova Constructions?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
      Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
      Sed rhoncus, tortor sed eleifend tristique, tortor mauris. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Repellat eum molestias reprehenderit! 
      Et, quia. Saepe aspernatur dolores dolor magnam quasi 
      tempora sint cupiditate aut magni corrupti ipsam, ad numquam in.`
    },
    {
      question: "Why should you choose Nova Constructions?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
      Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
      Sed rhoncus, tortor sed eleifend tristique, tortor mauris. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Repellat eum molestias reprehenderit! 
      Et, quia. Saepe aspernatur dolores dolor magnam quasi 
      tempora sint cupiditate aut magni corrupti ipsam, ad numquam in.`
    },
    {
      question: "Why should you choose Nova Constructions?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
      Duis vulputate commodo lectus, ac blandit elit tincidunt id. 
      Sed rhoncus, tortor sed eleifend tristique, tortor mauris. 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Repellat eum molestias reprehenderit! 
      Et, quia. Saepe aspernatur dolores dolor magnam quasi 
      tempora sint cupiditate aut magni corrupti ipsam, ad numquam in.`
    },
    ]

  return (
    <div className="aboutPage">
      <h1 className='heading'>Nova Builders</h1>
      {questionAnswers.map((qa, index) => AboutItem({questionAnswer: qa, key: index}))}
    </div>
  )
};
