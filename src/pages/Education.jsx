import Card from "../components/Card";

const workshopCards = [
  {
    id: 1,
    title: "FinTech UI/UX Bootcamp: Design For Trust",
    speaker: "Stripe UX Lead",
    description:
      "Learn the design principles that build user trust in digital financial products, such as mobile-first design, clarity in transactions, and emotional engagement through design.",
  },
  {
    id: 2,
    title: "Build Your Own Robo-Advisor in Python",
    speaker: "Club Tech Team",
    description:
      "A hands-on coding workshop where attendees will use pandas, NumPy, and scikit-learn to build a basic algorithmic portfolio rebalancer based on user risk profiles.",
  },
  {
    id: 3,
    title: "Smart Contracts: Launch a Token on Ethereum",
    speaker: "Club Tech Team",
    description:
      "Get introduced to Solidity, MetaMask, and Remix IDE. Participants will deploy a simple ERC-20 token and understand the basics of gas, transactions, and wallets.",
  },
  {
    id: 4,
    title: "Pitch a FinTech Startup: Mini Hackathon",
    speaker: "Club Tech Team",
    description:
      "Form teams to ideate, validate, and pitch a new FinTech product in 3 hours. Best ideas win mentorship and a feature on the club's LinkedIn page.",
  },
  {
    id: 5,
    title: "Intro to FinTech API Integration: Build With Plaid",
    speaker: "Plaid Developer Team",
    description:
      "Hands-on coding workshop where participants use Plaid’s APIs to access bank transaction data and build a budgeting or lending prototype. Great for beginner and intermediate devs.",
  },
];

const tutorialCards = [
  {
    id: 1,
    title: "Make an App With the Stripe API ",
    description: "Learn how to use Stripe's API and create a small application.",
  },
  {
    id: 2,
    title: "Make an App With the Plaid API",
    description: "Learn how to use Plaid's API and create a small application.",
  },
];

export default function Education() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-800">
        Educational Resources
      </h1>
      <p className="text-gray-600">
        We host workshops and create content to help students learn FinTech
        fundamentals.
      </p>

      <section>
        <h2 className="text-xl font-semibold text-gray-700">Workshops</h2>
        <p className="text-gray-500">
          Hands-on sessions covering topics like Python, finance, and
          blockchain.
        </p>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {workshopCards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                speaker={card.speaker}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700">Tutorial Series</h2>
        <p className="text-gray-500">
          Video and written guides for independent learning.
        </p>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tutorialCards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                speaker={card.speaker}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
