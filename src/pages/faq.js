import React from "react";
import Layout from "../components/Layout";
const faq = () => {
  return (
    <Layout>
      <section>
        <div class="container px-5 py-12 mx-auto">
          <div className="mx-auto max-w-2xl text-center bg-neutral rounded-2xl p-3">
            <h2 className="text-4xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500">
              Frequently Asked Questons
            </h2>
            <p className="mt-2 mb-1 text-lg font-semibold leading-7">
              If you're question isn't here, contact us <br /> at&nbsp;
              <a
                href="mailto:info@escaperoomparkcity.com"
                className="font-semibold hover:underline text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 underline underline-offset-2"
              >
                info@escaperoomparkcity.com
              </a>
              <br /> or call&nbsp;
              <a
                href="tel:4356040556"
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 underline underline-offset-2"
              >
                435-604-0556
              </a>
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 mt-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text">
                  What is this?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    Escape Room Park City is an adventure game with interactive
                    puzzles where you and your team use wits, problem-solving,
                    and teamwork to find clues, solve challenges, and escape the
                    room. Most of all you will have fun!
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text  ">
                  Are you part of a chain, or a franchise?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    Nope! We are literally a mom-and-pop operation, with every
                    room dreamed up and designed by the owners.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text  ">
                  How do I get to the escape room?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    There is parking all around us. It is a bit confusing but
                    there is a parking garage and uncovered lots. Please pay
                    attention to the signage as Park City is consistently trying
                    to improve parking. Park City buses are still free and
                    drop-off at the main terminal is right across the street.
                    From there, we are at the Gateway Center, on the corner of
                    Swede Alley and Heber Avenue, on the second floor, above
                    Handle restaurant. Take the elevator up and keep an eye out
                    for our sign.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text  ">
                  Is it true that the games are challenging?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    Yes, it's true, but it wouldn't be fun if they weren't. Game
                    Masters help you through the room offering clues so that you
                    don't get too frustrated. Our ultimate goal is to make sure
                    that you have a good time.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text  ">
                  Can children play?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    Families have an amazing time! Children are welcome but may
                    be distracting to other players, so please indicate their
                    ages on your reservation. Children 18 years old or younger
                    must be accompanied by a parent or guardian in any of our
                    rooms. Our insurance requires it. You can also call us at
                    435-604-0556 if you have any questions We strongly encourage
                    parents to play the room with their kids - why let them have
                    all the fun? For an additional fee, we can provide a Game
                    Master to play the room with kids-only groups to help
                    increase their experience. The fee is $35. Please indicate
                    on your reservation the number and age of children in your
                    group. If you would like a Game Master to play with your
                    children, give us a call at 435-604-0556.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text  ">
                  How many can be in our group?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    The Mine Trap room plays best for teams of 6-10 adults and
                    kids; the Travel Room plays best for teams of 4-6, our
                    Parlor plays best for teams of 4 to 6 players and the Pirate
                    Booty is best for 4-8. However, smaller teams can also do
                    great and you do need at least two people to play any room.
                    If you would like to book a team of more than 10, please
                    call us at 435-604-0556. Please note that in order to play
                    with less than 4 people you may have to pay for the minimum
                    amount of people.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl  font-bold py-7 px-4 inline-block bg-clip-text  ">
                  Do you really lock people in?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    Nope! While commonly called "escape rooms," we don't
                    actually lock anyone in. The door you enter is always
                    unlocked, and you can walk out at any time.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text  ">
                  Claustrophobic? Not a problem
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    If you are able to visit a doctor's office, you will be fine
                    in our Escape Rooms. None of our rooms have confined spaces
                    and ceiling heights are normal. Once you are in the room the
                    focus is on the puzzles and games. You will become so
                    engaged with the fun you will not even notice that you are
                    in a room at all. And, you are never really "locked in”.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text  ">
                  What else should I keep in mind?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    Please remember, drinking and thinking can be dangerous. You
                    want a clear mind to play this game. We reserve the right to
                    eject anyone who we feel may be a danger to themselves or
                    others without a refund.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text  ">
                  Do you sell gift certificates?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    We do! To purchase a gift certificate, call 435-604-0556.
                    Gift certificates can be for any amount, and are emailed to
                    you.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text  ">
                  How long does it take?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    We have designed the escape experiences to last beyond the
                    escape itself, so plan on being with us a little longer than
                    the room time states. For 70-minute escapes, plan on being
                    with us for 90 minutes. For 60-minute escapes, plan on being
                    with us for 75 minutes. We do our best to start the game
                    right on time so please make sure to plan ahead for parking
                    and getting to the room.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text  ">
                  How do I sign up?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    You can either call us at 435-604-0556 or book online here!
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text  ">
                  What if we only have 2 players?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    Two players can have a great time in our rooms! Please keep
                    in mind that it may be difficult. We want you to have a
                    great time so our game masters will help when needed. In
                    order for two people to play you must pay the minimum per
                    room. If you are flexible with your time, we do have a
                    workaround. The booking goes offline one hour before the
                    start time. If you would like to call to see if it's
                    available (or if we have enough staff) you may be able to
                    pay the per-person pricing. Please keep in mind that either
                    option does not guarantee that your party will have the room
                    to themselves.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text  ">
                  Do you host corporate or special events?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    Sure do! We are a great and unique option for birthday and
                    bachelor/bachelorette parties, anniversary celebrations,
                    family reunions, and more! If you would like to customize
                    your experience, call us at 435-604-0556 and we can make
                    your special day spectacular! We can also recommend
                    restaurants that are nearby, so please call for more info
                    435-604-0556.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow border border-base-300 bg-neutral rounded-box  ">
                <input type="checkbox" className="w-auto h-auto" />
                <div className="collapse-title text-xl font-bold py-7 px-4 inline-block bg-clip-text  ">
                  Why don't you offer refunds?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    Staff is hard to come by these days. (Are you looking for a
                    fun job?) We schedule our staff according to bookings so
                    cancellations are hard for us. We do try to accommodate as
                    much as possible, but we need time to do so. Please be aware
                    there will be change-of-room fees, if you can't make your
                    scheduled appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default faq;
