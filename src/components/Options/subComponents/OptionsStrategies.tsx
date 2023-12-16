// Local Files
import StrategyCard from "../../../globalSubComponents/StrategyCard";

const OptionsStrategies = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <StrategyCard
          heading="Strategy Builder"
          caption="Craft, refine, and implement your trading strategies effortlessly. Choose and personalize your approach, then execute seamlessly. Whether you're into vertical spreads, calendar spreads, or straddles, we've got you covered. Elevate your trading game today!"
          isBlack={false}
          thumbnail="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <StrategyCard
          heading="Watchlist"
          caption="Explore options effortlessly with our Watchlist feature. Track and analyze options contracts, uncovering potential returns before you trade. Optimize your strategy with ease and stay informed on market opportunities. Start now!"
          isBlack={true}
          thumbnail="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <StrategyCard
          heading="Retirement Trade"
          caption="Supercharge your retirement on our platform. Trade options in a tax-advantaged account—hedge with long puts, generate income with covered calls, and enjoy a unique 1% match* every year. Plan your prosperous future today!"
          isBlack={false}
          className="md:order-last"
          thumbnail="https://images.unsplash.com/photo-1587929501535-1e2d559e8488?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <StrategyCard
          heading="Cash Accounts"
          caption="Experience flexibility in trading with our cash accounts. Break free from pattern day trade restrictions and trade stocks, ETFs, and options seamlessly. Elevate your trading game with the power of options and cash accounts combined."
          isBlack={true}
          thumbnail="https://images.unsplash.com/photo-1623118176012-9b0c6fa0712d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default OptionsStrategies;
