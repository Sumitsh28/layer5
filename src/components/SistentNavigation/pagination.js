import React, { useEffect, useState } from "react";

import { content } from "./content";
import Button from "../../reusecore/Button";
import PaginationWrapper from "./pagination.style";

const SistentPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const path = window.location.pathname;
    const index = content.findIndex((x) => x.link === path);
    setCurrentPage(index);
  }, []);

  return (
    <PaginationWrapper>
      {currentPage > 0 ? (
        <Button $secondary $url={content[currentPage - 1]?.link}>
          &larr; Previous
        </Button>
      ) : null}

      {currentPage < content.length - 1 ? (
        <Button $primary $url={content[currentPage + 1]?.link}>
          Next &rarr;
        </Button>
      ) : null}
    </PaginationWrapper>
  );
};

export default SistentPagination;
