"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import {
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Package,
  Search,
  Settings,
  ShoppingCart,
  Tag,
  Users,
  Barcode,
  Camera,
  Smartphone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function DashboardPage() {
  const [activeItem, setActiveItem] = useState("dashboard")
  const [scannerOpen, setScannerOpen] = useState(false)
  const [scannedCode, setScannedCode] = useState<string | null>(null)
  
  // Remove isMobile state check since we'll support all devices
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <div className="flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search..." className="w-full pl-8 md:w-[300px] lg:w-[400px]" />
                </div>
              </form>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary"></span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="grid flex-1 items-start gap-4 p-6 md:gap-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Select Date</span>
                </Button>
                <Button size="sm">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  <span>Generate Report</span>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">+10.5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">+3.2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Inventory</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,543</div>
                  <p className="text-xs text-muted-foreground">+7.4% items in stock</p>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:bg-muted/20 transition-colors" onClick={() => setScannerOpen(true)}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Barcode Scanner</CardTitle>
                  <Barcode className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center gap-2 py-2">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Camera className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm text-center">
                      Tap to scan product barcodes
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>Monthly sales performance and trends</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center bg-muted/20">
                  <p className="text-muted-foreground">Sales chart will appear here</p>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Latest customer orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((order) => (
                      <div key={order} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <Tag className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">Order #{order}23456</p>
                          <p className="text-xs leading-none text-muted-foreground">2 items • $129.99</p>
                        </div>
                        <div className="text-sm text-right">
                          <div className="font-medium">Just now</div>
                          <div className="text-xs text-muted-foreground">Processing</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
      <Dialog open={scannerOpen} onOpenChange={setScannerOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Scan Barcode</DialogTitle>
          </DialogHeader>
          {scannedCode ? (
            <div className="space-y-4 py-4 text-center">
              <Barcode className="h-12 w-12 mx-auto text-primary" />
              <p className="text-xl font-medium">{scannedCode}</p>
              <p className="text-sm text-muted-foreground">Product code scanned successfully</p>
              <Button
                onClick={() => {
                  setScannedCode(null)
                  setScannerOpen(false)
                }}
              >
                Done
              </Button>
            </div>
          ) : (
            <BarcodeScanner onScan={(code) => setScannedCode(code)} />
          )}
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  )
}

function AppSidebar({
  activeItem,
  setActiveItem,
}: {
  activeItem: string
  setActiveItem: (item: string) => void
}) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <ShoppingCart className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">BizMan</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeItem === "dashboard"} onClick={() => setActiveItem("dashboard")}>
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeItem === "products"} onClick={() => setActiveItem("products")}>
                  <Package className="h-4 w-4" />
                  <span>Products</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeItem === "orders"} onClick={() => setActiveItem("orders")}>
                  <ShoppingCart className="h-4 w-4" />
                  <span>Orders</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeItem === "customers"} onClick={() => setActiveItem("customers")}>
                  <Users className="h-4 w-4" />
                  <span>Customers</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Reports</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeItem === "analytics"} onClick={() => setActiveItem("analytics")}>
                  <BarChart3 className="h-4 w-4" />
                  <span>Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeItem === "sales"} onClick={() => setActiveItem("sales")}>
                  <CreditCard className="h-4 w-4" />
                  <span>Sales</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-6">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">Store Manager</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function BarcodeScanner({ onScan }: { onScan: (code: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [permissionError, setPermissionError] = useState<string | null>(null)
  const [waitingForUserAction, setWaitingForUserAction] = useState(true)
  const [scanProgress, setScanProgress] = useState(0)
  const [scanLines, setScanLines] = useState<number[]>([])
  const scanAnimationRef = useRef<number | null>(null)
  // Add state to track if device has a camera
  const [hasCamera, setHasCamera] = useState<boolean | null>(null)

  // Check if device has a camera
  useEffect(() => {
    // Check if the browser supports navigator.mediaDevices
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      setHasCamera(false)
      return
    }

    navigator.mediaDevices.enumerateDevices()
      .then(devices => {
        const videoDevices = devices.filter(device => device.kind === 'videoinput')
        setHasCamera(videoDevices.length > 0)
      })
      .catch(err => {
        console.error("Error checking for cameras:", err)
        // If we can't check, we'll assume there is a camera and let the permission request handle errors
        setHasCamera(true)
      })
  }, [])

  // Function to start camera access
  const startCamera = async () => {
    try {
      setWaitingForUserAction(false)
      setHasPermission(null)
      setPermissionError(null)

      console.log("Requesting camera access...")

      // Request camera with environment facing (back camera) if available
      const constraints = {
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      }

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          // Set the video element's source to the camera stream
          if (videoRef.current) {
            videoRef.current.srcObject = stream
            videoRef.current.onloadedmetadata = () => {
              videoRef.current?.play()
              setHasPermission(true)
              setIsScanning(true)
              startScanAnimation()

              // For demonstration, we'll simulate finding a barcode after a random interval
              // In a real app, this would be replaced with actual barcode detection logic
              const randomTime = 2000 + Math.random() * 3000
              setTimeout(() => {
                const mockBarcodes = [
                  "5901234123457", // EAN-13
                  "9781234567897", // ISBN
                  "7350053850252", // Random EAN-13
                  "4006381333931", // Random EAN-13
                  "0254721548714", // Random EAN-13
                ]
                const randomIndex = Math.floor(Math.random() * mockBarcodes.length)
                simulateSuccessfulScan(mockBarcodes[randomIndex])
              }, randomTime)
            }
          }
        })
        .catch((error) => {
          console.error("Error accessing the camera: ", error)
          setHasPermission(false)

          // Provide more specific error messages
          if (error instanceof DOMException) {
            if (error.name === "NotAllowedError") {
              setPermissionError(
                "Camera access was denied. Please check your browser settings and allow camera access."
              )
            } else if (error.name === "NotFoundError") {
              setPermissionError("No camera found on your device.")
            } else if (error.name === "NotReadableError") {
              setPermissionError("Camera is already in use by another application.")
            } else {
              setPermissionError(`Camera error: ${error.message}`)
            }
          } else {
            setPermissionError("An unexpected error occurred when accessing the camera.")
          }
        })
    } catch (err) {
      console.error("Error in startCamera function:", err)
      setHasPermission(false)
      setPermissionError("An unexpected error occurred when accessing the camera.")
    }
  }

  // Visual animations for scan effect
  const startScanAnimation = () => {
    // Generate random scan lines for visual effect
    setScanLines([0.2, 0.4, 0.6, 0.8])

    let progress = 0
    const animateScan = () => {
      progress = (progress + 1) % 100
      setScanProgress(progress)
      scanAnimationRef.current = requestAnimationFrame(animateScan)
    }

    scanAnimationRef.current = requestAnimationFrame(animateScan)
  }

  const stopScanAnimation = () => {
    if (scanAnimationRef.current) {
      cancelAnimationFrame(scanAnimationRef.current)
      scanAnimationRef.current = null
    }
  }

  const simulateSuccessfulScan = (code: string) => {
    // Add visual feedback before returning the code
    setIsScanning(false)
    stopScanAnimation()

    // Stop the camera stream
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      const tracks = stream.getTracks()
      tracks.forEach((track) => track.stop())
    }

    // Return the scanned code
    onScan(code)
  }

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream
        const tracks = stream.getTracks()
        tracks.forEach((track) => track.stop())
      }
      stopScanAnimation()
    }
  }, [])

  // If we've determined the device has no camera
  if (hasCamera === false) {
    return (
      <div className="p-8 text-center flex flex-col items-center gap-4">
        <div className="rounded-full bg-red-100 p-3">
          <Camera className="h-6 w-6 text-red-500" />
        </div>
        <p className="font-medium text-red-500">No camera detected</p>
        <p className="text-sm text-muted-foreground">
          This device doesn't appear to have a camera. Please use a device with a camera to scan barcodes.
        </p>
        <Button onClick={() => onScan("DEMO123456789")} className="mt-2">
          Use Demo Barcode
        </Button>
      </div>
    )
  }

  if (waitingForUserAction) {
    return (
      <div className="p-8 text-center flex flex-col items-center gap-4">
        <div className="rounded-full bg-primary/10 p-4">
          <Camera className="h-8 w-8 text-primary" />
        </div>
        <p className="font-medium">Camera Access Required</p>
        <p className="text-sm text-muted-foreground">
          Click the button below to start the barcode scanner. You'll need to allow camera access when prompted.
        </p>
        <Button onClick={startCamera} className="mt-2">
          Start Camera
        </Button>
      </div>
    )
  }

  if (hasPermission === null) {
    return (
      <div className="p-8 text-center flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p>Requesting camera permission...</p>
        <p className="text-xs text-muted-foreground">
          If no permission dialog appears, check if your browser is blocking popups or has already denied camera access.
        </p>
      </div>
    )
  }

  if (hasPermission === false) {
    return (
      <div className="p-8 text-center flex flex-col items-center gap-4">
        <div className="rounded-full bg-red-100 p-3">
          <Camera className="h-6 w-6 text-red-500" />
        </div>
        <p className="font-medium text-red-500">Camera access denied</p>
        <p className="text-sm text-muted-foreground">
          {permissionError || "Please enable camera permissions in your browser settings."}
        </p>

        <div className="mt-4 space-y-4">
          <div className="text-sm">
            <p className="font-medium">How to enable camera access:</p>
            <ol className="list-decimal text-left pl-5 mt-2 space-y-1">
              <li>Click on the camera/lock icon in your browser's address bar</li>
              <li>Select "Allow" for camera access</li>
              <li>Refresh the page</li>
            </ol>
          </div>

          <Button onClick={startCamera} className="mt-4">
            Try Again
          </Button>
          <div>
            <Button onClick={() => onScan("DEMO123456789")} variant="outline" className="mt-2">
              Use Demo Barcode
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-md">
      {/* Video display */}
      <video ref={videoRef} autoPlay playsInline muted className="w-full h-auto" />
      <canvas ref={canvasRef} className="hidden" />

      {/* Scanning overlay */}
      {isScanning && (
        <>
          {/* Targeting frame */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-4/5 h-32 border-2 border-primary rounded-md flex items-center justify-center relative">
              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>

              {/* Scanner line animation */}
              <div
                className="absolute left-0 h-0.5 bg-red-500 w-full opacity-80"
                style={{ top: `${scanProgress}%` }}
              ></div>

              {/* Scan lines for visual effect */}
              {scanLines.map((position, index) => (
                <div
                  key={index}
                  className="absolute left-0 h-px bg-primary/30 w-full"
                  style={{ top: `${position * 100}%` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Instruction text */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <div className="bg-black/50 text-white py-1 px-2 mx-auto inline-block rounded-full text-sm">
              Position barcode within frame
            </div>
          </div>

          {/* Recording indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
            <span>Scanning</span>
          </div>
        </>
      )}
    </div>
  )
}