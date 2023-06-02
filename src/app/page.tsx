import dynamic from "next/dynamic";
import Link from "next/link";

const SplineRoom = dynamic(() => import("@/components/spline-room"));

export default function Home() {
  return (
    <>
      <section className="w-full min-h-screen bg-purple-900 text-white flex items-center justify-center relative py-10">
        <div className="container relative z-20">
          <div className="flex flex-wrap items-center justify-between flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 lg:w-1/3 relative z-20 text-center md:text-left">
              <div className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">
                NextJS Threed
              </div>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima, expedita. Asperiores eius veniam deserunt impedit quam
                  commodi magni voluptatem?
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href={`/`}
                  className="inline-block border-white border rounded-full px-8 py-4 text-sm text-white hover:bg-white hover:text-purple-900"
                >
                  EXPLORE NOW
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3">
              <SplineRoom className={`spline-room-wrapper`} />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-screen bg-sky-500 text-white flex items-center justify-center">
        <div>section 2</div>
      </section>
      <section className="w-full h-screen bg-yellow-500 text-white flex items-center justify-center">
        <div>section 3</div>
      </section>
    </>
  );
}
