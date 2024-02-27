import React from 'react'
import {
  RiMenu2Line,
  IoIosArrowDown,
  FaRegPenToSquare,
  IoMdCheckmarkCircle,
  MdOutlineElectricBolt,
  GoCircle,
  BsStars,
  IoMdClose,
  IoCheckmark
} from '@/components/shared/Icons'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type ModelType = 'ChatGPT 3.5' | 'ChatGPT 4'
const menuItems = {
  'ChatGPT 3.5': {
    title: 'ChatGPT 3.5',
    description: 'The most powerful chatbot',
    icon: MdOutlineElectricBolt,
  },
  'ChatGPT 4': {
    title: 'ChatGPT 4',
    description: 'Our smartest and most capable model. Includes DALL·E, browsing and more.',
    icon: BsStars,
  },
}

const Home = () => {
  const [open, setOpen] = React.useState(true)
  const [activeModel, setActiveModel] = React.useState<ModelType>('ChatGPT 3.5')

  return (
    <main className="relative flex h-full w-full flex-col overflow-y-auto overflow-x-hidden bg-background text-foreground antialiased">
      <header className="sticky top-0 flex h-12 w-full items-center justify-between border-b bg-background px-3 shadow-sm dark:border-foreground/30">
        <button className="text-foreground focus:outline-none" aria-label="Open Menu" title="Open Menu" type="button">
          <RiMenu2Line size={18} />
        </button>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Chat Gpt 3.5"
          className={cn('flex h-full items-center justify-center gap-2 rounded-2xl px-4 hover:bg-muted', {
            'bg-muted': open,
          })}
        >
          <h1 className="text-lg font-bold">{activeModel}</h1>
          <IoIosArrowDown className="text-muted-foreground/70 " size={14} />
        </button>
        <button>
          <FaRegPenToSquare size={18} />
        </button>
      </header>
      {/* Models Menu */}
      {open && (
        <div role="alertdialog" className="relative w-full flex-grow">
          <ul className="absolute left-[50%] top-4 z-20 flex h-fit w-[80%] translate-x-[-50%] flex-col items-start gap-2 rounded-xl bg-accent px-2 py-4">
            {Object.entries(menuItems).map(([key, item], index) => (
              <li
                onClick={() => setActiveModel(key as ModelType)}
                role="button"
                key={index}
                className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-xl border border-transparent p-3 hover:border-foreground hover:bg-accent-foreground/10"
              >
                <section className="flex items-center gap-2">
                  <item.icon className="shrink-0" size={20} />
                  <div>
                    <h2 className="text-lg font-bold">{key}</h2>
                    <p className="text-muted-foreground">{item.description}</p>
                    {key === 'ChatGPT 4' && (
                      <button className="mt-2 w-full rounded-lg bg-primary py-2 text-sm font-bold text-primary-foreground">
                        Upgrade to Plus
                      </button>
                    )}
                  </div>
                </section>
                {activeModel === key ? (
                  <IoMdCheckmarkCircle className="shrink-0 text-foreground" size={20} />
                ) : (
                  <GoCircle className="shrink-0 text-foreground/30" size={20} />
                )}
              </li>
            ))}
          </ul>
          {/* Overlay of Model Menu */}
          <div onClick={() => setOpen(false)} className="absolute left-0 top-0 h-full w-full bg-transparent"></div>
        </div>
      )}
      {/* Pricing */}
      <section className="fixed left-0 top-0 z-20 min-h-full w-full overflow-y-auto bg-background">
        <div className="absolute bottom-[-60px
        
        ] h-fit left-[50%] top-4 z-10 flex w-[90%] translate-x-[-50%] flex-col rounded-xl bg-accent">
          <section className="flex w-full items-center justify-between border-b px-6 py-6 dark:border-foreground/20">
            <h1 className="text-xl font-bold">Upgrade your plan</h1>
            <button>
              <IoMdClose size={24} />
            </button>
          </section>

          <article className="w-full px-6 py-4 flex flex-col gap-6 border-b dark:border-foreground/30">
            <div className='flex flex-col gap-1'>
              <h2 className="text-xl font-bold">Free</h2>
              <span className="text-muted-foreground">USD $0/month</span>
            </div>
            <Button className='w-full font-bold'>Current Plan</Button>
            <div className='text-sm'>
              <p>For people just getting started with ChatGPT:</p>
                <ul className='flex flex-col gap-2 mt-2'>
                  <li className='flex items-start gap-3'>
                    <IoCheckmark className='text-primary shrink-0' size={18} />
                    <span>Unlimited conversations</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <IoCheckmark className='shrink-0 text-primary' size={18} />
                    <span>Unlimited conversationsnlimited conversationsnlimited conversationsnlimited conversationsnlimited conversationsnlimited conversations</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <IoCheckmark className='shrink-0 text-primary' size={18} />
                    <span>Unlimited conversationsnlimited conversationsnlimited conversationsnlimited conversationsnlimited conversationsnlimited conversations</span>
                  </li>
                  
                </ul>
            </div>
          </article>
          <article className="w-full px-6 py-4 flex flex-col gap-6 border-b dark:border-foreground/30">
            <div className='flex flex-col gap-1'>
              <h2 className="text-xl font-bold">Free</h2>
              <span className="text-muted-foreground">USD $0/month</span>
            </div>
            <Button className='w-full font-bold'>Current Plan</Button>
            <div className='text-sm'>
              <p>For people just getting started with ChatGPT:</p>
                <ul className='flex flex-col gap-2 mt-2'>
                  <li className='flex items-start gap-3'>
                    <IoCheckmark className='text-primary shrink-0' size={18} />
                    <span>Unlimited conversations</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <IoCheckmark className='shrink-0 text-primary' size={18} />
                    <span>Unlimited conversationsnlimited conversationsnlimited conversationsnlimited conversationsnlimited conversationsnlimited conversations</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <IoCheckmark className='shrink-0 text-primary' size={18} />
                    <span>Unlimited conversationsnlimited conversationsnlimited conversationsnlimited conversationsnlimited conversationsnlimited conversations</span>
                  </li>
                  
                </ul>
            </div>
          </article>
        </div>
        {/* Overlay */}
        <div className="absolute left-0 top-0 z-0 h-full w-full bg-transparent"></div>
      </section>
    </main>
  )
}

export default Home
