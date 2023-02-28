import React from "react";
import Link from "next/link";
import { Book } from "react-feather";

// local components
import SubTitle from "../shared/SubTitle";

const Repository = ({ repositoryList }) => {
  return (
    <div className="my-8 px-8 lg:mb-16 lg:px-16">
      <SubTitle
        icon=""
        title="Repositories are pinned on top of GitHub."
        className="inline-flex text-2xl font-extrabold mb-2"
      />
      <div className="flex overflow-x-auto space-x-10 py-8">
        {repositoryList &&
          repositoryList.map((repo, repoIdx) => (
            <Link
              key={repo.id}
              href={repo.url}
              className="flex-none lg:w-1/3 border border-violet-300 rounded-md p-8"
            >
              <h4 className="flex flex-row">
                <span className="font-semibold mr-1">
                  <Book size={20} />
                </span>
                <span className="font-semibold">{repo.name}</span>
              </h4>
              <p className="text-sm mt-3">{repo.description}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Repository;
