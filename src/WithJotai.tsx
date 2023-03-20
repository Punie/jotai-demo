import clsx from 'clsx';
import { atom, useAtom, useAtomValue } from 'jotai';

const isPanelOpenAtom = atom(false);

export default function WithJotai() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">With Jotai</h2>

      <div className="grid grid-cols-[max-content_1fr_max-content] gap-4">
        <LeftPanel />
        <MainContent />
        <RightPanel />
      </div>
    </section>
  );
}

function LeftPanel() {
  const isOpen = useAtomValue(isPanelOpenAtom);

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
  const [isPanelOpen, setIsPanelOpen] = useAtom(isPanelOpenAtom);

  return (
    <div className="w-[240px] p-4 ring-2 flex flex-col gap-4">
      <h3 className="text-2xl font-bold">Right panel</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
        fugiat.
      </p>
      <button
        className="block w-full bg-indigo-500 text-slate-100 rounded-full px-4 py-2 hover:bg-indigo-600"
        onClick={() => setIsPanelOpen(!isPanelOpen)}
      >
        {isPanelOpen ? 'Close' : 'Open'}
      </button>
    </div>
  );
}

function MainContent() {
  const isPanelOpen = useAtomValue(isPanelOpenAtom);

  return (
    <div className={clsx('p-4', 'ring-2', { 'col-span-2': !isPanelOpen })}>
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
