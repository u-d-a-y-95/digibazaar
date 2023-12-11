import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="mx-auto container flex justify-center">
        <div className="w-[650px]">
          <h1 className="text-4xl leading-normal">
            Everything you need to get creative projects{" "}
            <span className=" text-primary font-bold underline">Done</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg">
            Bring your ideas to life with professional digital assets, resources
            and services
          </p>
          <div className="mt-5">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost" className="ml-5">
              Our quality promise &rarr;
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
