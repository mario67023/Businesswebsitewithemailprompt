import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface BuilderOrFallbackProps {
  children: React.ReactNode;
}

export function BuilderOrFallback({ children }: BuilderOrFallbackProps) {
  const location = useLocation();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      setLoading(true);

      try {
        // Fetch the Builder.io content for this page
        const content = await builder
          .get("page", {
            url: location.pathname,
          })
          .promise();

        setContent(content);
      } catch (error) {
        console.error("Error fetching Builder.io content:", error);
        setContent(null);
      }

      setLoading(false);
    }

    fetchContent();
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  // If Builder.io content exists, render it
  if (content) {
    return <BuilderComponent model="page" content={content} />;
  }

  // Otherwise, render the fallback (coded page)
  return <>{children}</>;
}
