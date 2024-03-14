import { Card } from "flowbite-react";
import { Image } from "lucide-react";
import { Footerr } from "../Footer/Footer";
import { Chart } from "../Chart/Chart";

export default function Home() {
  return (
    <>
      <div className="flex flex-col px-4 mt-10 ml-24 gap-6">
        <div className="gap-4 grid xl:grid-cols-4 md:grid-cols-2">
          <Card className="max-w-sm">
            <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              Total Revenue
            </h5>
            <p className="font-normal text-3xl text-gray-700 dark:text-gray-400">
              $45,231.89
            </p>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              +20.1% from last month
            </p>
          </Card>
          <Card className="max-w-sm">
            <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              Subscriptions
            </h5>
            <p className="font-normal text-3xl text-gray-700 dark:text-gray-400">
              +2350
            </p>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              +180.1% from last month
            </p>
          </Card>
          <Card className="max-w-sm">
            <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              Orders
            </h5>
            <p className="font-normal text-3xl text-gray-700 dark:text-gray-400">
              +12,234
            </p>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              +19% from last month
            </p>
          </Card>
          <Card className="max-w-sm">
            <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              Total Products
            </h5>
            <p className="font-normal text-3xl text-gray-700 dark:text-gray-400">
              +573
            </p>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              +10% from last month
            </p>
          </Card>
        </div>
        <div className="gap-4 grid xl:grid-cols-3">
          <Chart />
          <Card className="w-full max-w-md">
            <div className="mb-4 flex items-center justify-between">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Latest Customers
              </h5>
              <a
                href="#"
                className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                View all
              </a>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <Image
                        alt="Neil image"
                        height="32"
                        src="/images/people/profile-picture-1.jpg"
                        width="32"
                        className="rounded-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Neil Sims
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $320
                    </div>
                  </div>
                </li>

                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <Image
                        alt="Bonnie image"
                        height="32"
                        src="/images/people/profile-picture-3.jpg"
                        width="32"
                        className="rounded-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Bonnie Green
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $3467
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <Image
                        alt="Michael image"
                        height="32"
                        src="/images/people/profile-picture-2.jpg"
                        width="32"
                        className="rounded-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Michael Gough
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $67
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <Image
                        alt="Lana image"
                        height="32"
                        src="/images/people/profile-picture-4.jpg"
                        width="32"
                        className="rounded-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Lana Byrd
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $367
                    </div>
                  </div>
                </li>
                <li className="pb-0 pt-3 sm:pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <Image
                        alt="Thomas image"
                        height="32"
                        src="/images/people/profile-picture-5.jpg"
                        width="32"
                        className="rounded-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Thomes Lean
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $2367
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </div>
        <Footerr />
      </div>
    </>
  );
}
