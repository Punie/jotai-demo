import clsx from 'clsx';
import { createContext, useContext, useState } from 'react';

type PanelContext = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const panelContext = createContext<PanelContext | null>(null);

const PanelProvider = panelContext.Provider;

const usePanel = () => {
  const panel = useContext(panelContext);

  if (!panel) {
    throw new Error('Cannot use `panelContext` outside of `PanelProvider`');
  }

  return panel;
};

export default function WithContext() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PanelProvider value={{ isOpen, setIsOpen }}>
      <section>
        <h2 className="text-3xl font-bold mb-4">With React Context API</h2>

        <div className="grid grid-cols-[max-content_1fr_max-content] gap-4">
          <LeftPanel />
          <MainContent />
          <RightPanel />
        </div>
      </section>
    </PanelProvider>
  );
}

function LeftPanel() {
  const { isOpen } = usePanel();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="w-[240px] p-4 ring-2 flex flex-col gap-4">
      <h3 className="text-2xl font-bold">Left panel</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        necessitatibus totam aut iste minus culpa et consequuntur saepe, ipsa
        dolorem.
      </p>
    </div>
  );
}

function RightPanel() {
  const { isOpen, setIsOpen } = usePanel();

  return (
    <div className="w-[240px] p-4 ring-2 flex flex-col gap-4">
      <h3 className="text-2xl font-bold">Right panel</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        fugiat.
      </p>
      <button
        className="block w-full bg-indigo-500 text-slate-100 rounded-full px-4 py-2 hover:bg-indigo-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
    </div>
  );
}

function MainContent() {
  const { isOpen } = usePanel();

  return (
    <div className={clsx('p-4', 'ring-2', { 'col-span-2': !isOpen })}>
      <h3 className="text-2xl font-bold mb-4">Main content</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ab
        obcaecati ipsa expedita cumque, error temporibus tempora quibusdam
        architecto, quas tempore sunt totam? Autem vel impedit pariatur
        reiciendis inventore aliquid dolorem aspernatur deserunt. Harum aperiam
        quibusdam eaque alias velit nobis cum fugiat? Ullam magni doloremque
        facilis, odio quaerat ex iure explicabo culpa exercitationem
        voluptatibus! Nihil illum odit facere aperiam officiis perferendis,
        fugiat, consectetur sequi rem, pariatur eveniet animi adipisci itaque
        illo optio in debitis non facilis. Eos dolor nesciunt eius dolore
        adipisci aliquam nisi quibusdam laudantium. Rerum obcaecati maxime id
        voluptatum autem? Laborum eum et dolor veniam nemo at ad.
      </p>
    </div>
  );
}
