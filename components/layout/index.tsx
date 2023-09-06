import { Box } from '../base';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box className="h-screen w-full xs:overflow-scroll">
      <main className="flex-1 overflow-y-auto relative">{children}</main>
    </Box>
  );
}

export { Layout };
