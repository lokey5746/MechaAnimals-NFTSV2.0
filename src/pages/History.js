import React from "react";
import rocket from "../img/Rocket.png";
import ufo from "../img/UFO.png";

function History() {
  return (
    <section id="history">
      <div className="px-10 md:px-36 mt-16 py-5 w-full mx-auto space-y-4 md:space-y-8 relative">
        <h3 className="text-blue font-semibold text-2xl md:text-5xl text-center">
          Ancient History
        </h3>

        <p
          className="text-white text-base md:text-xl text-justify 
        "
        >
          Once upon a time, the mighty Jade Emperor decreed a great race to
          decide the years on the calendar. Each year would be named in the
          order of the animal’s place in the race. The results of the race were
          to be decided with a swim across the river.
        </p>
        <p className="text-white text-base md:text-xl text-justify">
          Naturally, Cat and Rat weren’t too excited to hear this, as they were
          the worst swimmers in the animal kingdom. They brilliantly came up
          with the idea to ask the kind Ox for a ride on his back. Sweet-hearted
          Ox agreed, and off they went. However, midway across the river, Rat
          pushed Cat into the water. Then, as Ox neared the other side of the
          river, Rat jumped ahead of him to the finish line, claiming first
          place for himself at the expense of the others. Ox good-naturedly took
          second place, followed by powerful Tiger, who pulled himself out of
          the river, exhausted and dripping, explaining to the Jade Emperor how
          difficult it was to cross the river with the heavy currents carrying
          him downstream. He had overcome this with his incredible strength,
          making him third.
        </p>
        <p className="text-white text-base md:text-xl text-justify">
          Tiger was followed by the clever Rabbit, who had crossed the river by
          leaping from stone to stone. He had almost fallen into the river, but
          his luck prevailed, and he had been able to grab a floating log that
          later washed him to shore. So, the rabbit became fourth. Dragon
          arrived next, making it fifth in the race. Of course, with his gift of
          swift flight, it was strange that he had not ranked first. Dragon
          explained to the Jade Emperor that he had to stop and make rain to
          help all the people and creatures of the earth, and therefore he was
          held back. Then, on his way to the finish line, he saw a little
          helpless Rabbit clinging onto a log, so he did a good deed and gave a
          puff of breath to the poor creature so that it could land on the
          shore. The Jade Emperor was very pleased with the actions of the
          Dragon, and he was added to the zodiac cycle. Soon after, the sound of
          thundering hooves marked the arrival of Horse, who had a passenger
          attached to him: Snake. Snake darted to the finish line ahead of
          Horse, who was so startled, he reared back in fright, letting Snake
          slither ahead across the finish line. This made Snake sixth and Horse
          seventh.
        </p>
        <p className="text-white text-base md:text-xl text-justify">
          Not long after, Sheep, Monkey, and Rooster came to the shore. These
          three creatures helped each other to finish the race. Rooster spotted
          a raft and took the other two animals on it with him. Together, Sheep
          and Monkey cleared the weeds, tugged and pulled, and finally got the
          raft to the shore. Because of their combined efforts, the Emperor was
          very pleased and promptly named Sheep as the eighth creature, Monkey
          as the ninth, and Rooster the tenth.
        </p>
        <p className="text-white text-base md:text-xl text-justify">
          The next creature to arrive was once again a surprise. Dog bounded
          into eleventh place, even though he was the best swimmer. However, he
          had enjoyed playing in the water so much, he’d gotten distracted and
          thus placed further back in the hierarchy. Lastly, just as the Jade
          Emperor was about to call an end to the race, a little Pig scurried
          across the finish line. Pig had gotten hungry during the race,
          promptly stopped for a feast, and then fell asleep. After the nap, the
          Pig continued the race and was named the twelfth animal of the zodiac
          cycle. As for the poor Cat, he made it out of the water but didn’t
          arrive in time to finish the race. Because Rat jeopardized his
          chances, it’s said that this is why cats always chase rats, trying to
          get vengeance for what they’ve done.
        </p>
        {/* <figure className="hidden md:block">
          <img
            src={rocket}
            alt="Rocket"
            className="absolute left-0 top-2/4 opacity-60"
          />
        </figure> */}
        <figure className="hidden md:block">
          <img
            src={ufo}
            alt="Rocket"
            className="absolute left-10 -top-28 opacity-60"
          />
        </figure>
      </div>
    </section>
  );
}

export default History;
