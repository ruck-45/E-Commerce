// Local Files
import StrategyCard from "../../../globalSubComponents/StrategyCard";

const InvestmentStrategies = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <StrategyCard
          heading="ETFs"
          caption="Explore Diversification with ETFs: Simplify stock selection pressure. Invest in curated bundles of companies
            effortlessly. Enhance your portfolio strategy by diversifying with ease on our platform."
          isBlack={false}
          thumbnail="https://images.unsplash.com/photo-1462045504115-6c1d931f07d1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <StrategyCard
          heading="Options"
          caption="Elevate your investment game with our Options trading platform. Gain the ability to buy or sell stocks at
            predetermined prices on specific dates. Plus, enjoy commission-free trading!"
          isBlack={true}
          thumbnail="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <StrategyCard
          heading="Crypto"
          caption="Enter the world of crypto with us! Buy, sell, and securely store Bitcoin, Ethereum, and Altcoins without
            commission fees. Start your journey with as little as $1. Join now!"
          isBlack={false}
          className="md:order-last"
          thumbnail="https://images.unsplash.com/photo-1629877521896-4719f02df3c7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <StrategyCard
          heading="Margin"
          caption="Amplify your purchasing potential! Unlock greater leverage to acquire desired stocks and ETFs without
            depleting your cash reserves. Borrow wisely and boost your investment capacity with our Margin feature."
          isBlack={true}
          thumbnail="https://images.unsplash.com/photo-1642052502780-8ee67e3bf930?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default InvestmentStrategies;
