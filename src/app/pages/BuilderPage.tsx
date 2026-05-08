import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Initialize Builder.io with your API key
// Replace 'YOUR_API_KEY' with your actual Builder.io public API key
builder.init(import.meta.env.VITE_BUILDER_API_KEY || 'YOUR_API_KEY');

export function BuilderPage() {
  const location = useLocation();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      setLoading(true);

      // Fetch the Builder.io content for this page
      const content = await builder
        .get("page", {
          url: location.pathname,
        })
        .promise();

      setContent(content);
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

  // If no content found, show 404
  if (!content) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-4">Page Not Found</h1>
          <p className="text-muted-foreground">
            This page hasn't been created in Builder.io yet.
          </p>
        </div>
      </div>
    );
  }

  // Render the Builder.io content
  return <BuilderComponent model="page" content={content} />;
}
