// Local Files
import StrategyCard from "../../../globalSubComponents/StrategyCard";

const RetirementStrategies = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <StrategyCard
          heading="Portfolio Builder"
          caption="Craft your ideal portfolio effortlessly. Select personalized investments or build your own—all commission-free. Whether it's a tailored recommendation or your unique mix, our platform empowers your financial journey."
          isBlack={false}
          thumbnail="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <StrategyCard
          heading="Tax Savings"
          caption="Maximize your savings with tax benefits. Enjoy tax-deferred or tax-free growth on your earnings, ensuring you retain more of your hard-earned money. Seize the advantage for financial prosperity."
          isBlack={true}
          thumbnail="https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <StrategyCard
          heading="Account Protection"
          caption="Rest easy with our account protection. As a member of SIPC, we safeguard securities customers up to $500,000 (including $250,000 for cash claims). Request our explanatory brochure or visit www.sipc.org for details"
          isBlack={false}
          className="md:order-last"
          thumbnail="https://images.unsplash.com/photo-1604398525509-ce4af98fdb23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <StrategyCard
          heading="Options"
          caption="Supercharge your portfolio with our options trading. Enjoy tax advantages and commission-free trading in your account. Unleash the power of options without worrying about per-contract fees. Other fees may apply."
          isBlack={true}
          thumbnail="https://images.unsplash.com/photo-1639754390580-2e7437267698?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
}

export default RetirementStrategies