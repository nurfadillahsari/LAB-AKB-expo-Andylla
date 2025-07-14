import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const initialGridImages = [
  { id: 1, mainSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExMVFRUXGRsaGBcYGBcWGBoZFxcXGhceGBoYHyggGBsnGxYYIjUhJSkrLjAuFyAzODMtNygtLisBCgoKDg0OGhAQGy0lICYtLS0tLS0tLS0tLS8tNS0tLS0tKy0tLS0tLS0tLS0tLS0uLS0tLS0tLS0rLS8tLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABBEAABAwIDBQYDBgUDAgcAAAABAAIDBBEFEiEGMUFRYQcTInGBkTJSoRQjQmKxwTNygpLRFUPhFqIkNGNzo7Lw/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKxEBAQACAQMDAgUFAQAAAAAAAAECEQMSITEEQVETYRQiQpHwUoGhsdEy/9oADAMBAAIRAxEAPwDqKIiPSEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERAEBFknZlcRyWNCXc2IirG0W3NLSP7nxz1B0EEIzvvydwaem/oiLZPKzoqQMcx2QZo8JbGzh30zWu9Q5zCD6LXk28rKbWuw57GcZIZGSgeYBsPVyKfVx+V/RR2B47T1kfeU8ge3iNzmnk5p1afNSKNBa0eIwue6NssZkbq5ge0vaOrQbj1VU27xeZ74cNo3WqKo2c8H+FEPjcbatNgetmutrZY8b7GIDHTR0hEZa4iomc55kexzbOygeG5100GvK94ZZ8sxunut7QWPlMFBTy18rd5i0iHnJY6dbW6rwNt6mnewYlh8lJHI7K2YPEjAT85As33voTbQroOF4bS4fA2KFgjjbyFy48S4/iceZXH+0/beDEHMoI5GthMje9md8DQ065T+I9d24C9yROvdjObK11dFHYZjdLOAIKiKS3Br2uPqL3UiTZHXsRUmq2+MsroMNpZK6Rujnt8MLf6zv8APQHgSvXebSWzfZKNo+QyeL3Elvqil5cYuiKhS7aywfdYth76dj/D3rfvoDfna/sC49FJyUU8bBUYbP30ZGb7PI/vIpGnX7mU3dE7kLlvQImZy+FqRVR220fcsqRG7uQ/u6m5tLTPuB95HbVoJ1INxcEA30tQN9RuRMsr6iIiRERAREQEREBZ6epycB58fdYERFxlmq3cQm1tYbt9tVpL6TdfAiMMemaUzbjHJ+8jw+iIFTOCXSE2EMIvmeT+HQHXgBzLVU4sWioGmHDh4j/FrHgOmld+IszX7uO+4b+O/U6n+qZ/t9Vf7yqqHU7TxbTwBpcB/NmhaejSoKrqBG0uPBVrk5MrlW7WVkkpvLI+Q83uLv1K1ZHBoubBb8Oy7u4NTXVDqeO18jPiAO4En8R+WxKxYPstGWCrrHzx0j3Wp4Pjq6o/hbG0AWB+a3HTg5TpOXFcJLkjdl/thqmuw5j3zD4gwXjLTwluQ0MPUjobrrcOwWKVnixDEDCw/wCxS+EAci87/UO81N7MbOTFjRI0UVONWUdOcrj1qZ2+J7+bWkDmXK6tFhYbkUud8RVdluz2gw+TvoGP73KWF73ueSHEFxsfCCbDUAK1oiKK9tRtNSUtoqiRsbpGnJnNgbW1zHQWJG9c67N8KpavEq97IIpaLKxvjja6MzXBPd5hYD4ybfMDxC6ti+B01UAKiCKYN1b3jGutffa+5bFBQxQMEcMbI2N3MY0NaPQaKd9tJ2qOLdlWFT6in7l3B8LjGQeYbqy/m0qlbVbEYvTU8kVNWPqad7cpZJbvQ3kHnnutcAgkWXa18IvoVCZlY/PI22eyJtFSxuoWRgB8e6Zz7eNz32BuTrpY/oIiWZzzdznOPNxJPuV1/b3YeCqF3Nyu/BK342HgD8zeh+h1XGKrCayGpFLI+NryPu3PuGS8srgDYnkba6cRebj7pmPVezZFQ8NLQ52Vws5tzlI5EbitzYzaV2Gztje4mklPiB/2nH8Y5Dn013jWFgmeHuilbkkYbOb1XjFGBzbc7qqcd45Or7SYeyGtZLYfZ68fZalvAvc09w/+be2/Uc1a8Go3Q08MLnZ3RxsYX7sxY0Nv62XP8HrzV4FdxJkpnsF+N6eSN7D593l9yumgXPLzVnXjryAL4pGGkGVwzAk23bhbVaEjLG1wfJDHOZWyPKIiLiIiAiIgyQQlx09UniLSQR5LwDbVfZH3JPNFe/V9nlEX3Lpf/wDaW/yiz860RcO8id/tyyC3XN4vW4+gWHFnWa078r2uI5gb1ZO0zBn0dY6oYPuKk3Jto2X8QPK/xDnd3JVWGmkqZYoI9ZJntY077ZjqfIDU9AVVxXHWS9QyR1rn4hVNccPpnZYILeKqnOjRl/FqQLenzqw0gqhVt+7ZNi0zMxza0+G053NAG99tLDVxvrb4rDgOzrDUxtDf/CYc0RQNO59SWgzSng4tBDQfnMnEK04XhEUDpXsBL5pDJI92rnE/CL/K1tmtHADncmUZ53PK5Vs0MLmRta+QyuAAdI4NaXHiSGgAeQCzoiMxERAREQEREHiaIOaWncVz3bLZllVE6CTRw1jk4td+Fw6cwuiqMxulzNzje39OPtv91phfakfmHFqmY1QE7bTxNEUp+csLi13W7C3Xja/FfKiXMenBXjtawWwZWsGrbMl6tJ8DvME5f6hyVBpopJ5GwwNMkr9GgcOZJ4AcTwVMsdXTbfV3rpvYxTB9HVB4ux85Fuf3bL/qF0tRGyWBtoqWOnBuWi7nfM9xu4+Vzp0AUuQjqxmpplhlyhw5iyxIiLSCIiAiIgIiICIiAth9RdlrNvflw/ytdERcZWCtpI5mOjlY17HCzmuFwQuf9nOzVO3HKp0LSIaNga0OcX2llFjYnWwAkGt1dKLEc89SL/dwZGbvx5O8kN+PhkjH9JUV2GRF1HPVuHiqqmSQ+V7W/uzqGHPZp0ZjANAAN505k3PuST6qF2r2mhoIs8nie7RkY+JxH6NHE/qbBTi/PW2uLOqqyZ5Pha4sYOAYwkC3nYu/qRytrGdvK6oJ+9MTODIrst5uHiPv6KLptoKuN2ZlTOD/AO493uHEg+oVcxmqLGgNNi6+vQW3e6u3Ybs9RVhqH1DWyyxlobG46BpBu+1/Eb6X4W6qFtdtui9nm2prLwz2E7RcEaCRo3m3BwuLjrccbXdcMqxFSYy1tIfDHNG0gHNlL8okZfedHkdL24LualUWGrqWRMdI9waxgLnE7gALlZlQu2KtcyjZG3QSyAO6ta0ut/cG+yCn7R9o1VO8iBxgiv4Q22cjm53A9Ba3Xeoem2vr4zdtVKf5nZx7PuFc9kdhMPrMPbLLme+QOvI2V7O7Ic5tgGkNu234gdb8NFw6CrMUhDX52Bxbfg4AkZhyuNVC0m3fNkO0sSubDVhrHHRsrdGE8A8H4D13eS6MQvy+u5dl+MuqaIB5u+F3dkneQACwn+k2v+VTFWDaPCWyMmp3fDI0t9HDQ+h/RVjscZGKNw7pjJ45HxTOAGZxabjMd5sHW5eFdD2hi+F3mD+o/dc52G+6xTE4NzXGOZo6vF3n3k+i1z7yVtw38zokDmg+IX9V6q7ZjYcVhRZuvp77ERESIsj4SACQdeixoSy+BERAREQEREBa89YxkkcZPilzZR/I3M76fqthVbalxZXYZL+HvZYj5zQkN+rERbpoYRUH7Hi0t9e/rD5ZImtb9GBWLsZaBhFMByffzMjz+6gNm6UuZi1LxNTPYdKiFpb+62ew/Eg6giYeGdvk4PcR7tcPokm3NzeI6YvzXjlK6KpmjcLFsjx6ZjY+osfVfpRUfbvZCnq3d4JmQzgWJNsrwN2cbwfzDhz0tDCS3w4TitF3rdPiG713hbG020FXXGnzQthdTx9210V2XBsCS6+g8OgGgueat0nZ9X/gjZKPmjkYR/3EH6KRwrsurJCO+cyFvHXO/wBA3T3KhO9IXsm2cMlVHpdkJ72Q8Lj4B6uA9GldXxXEHPqajD5JmwianD6eVhySNJzRyAXd4nNIa4EW0d0upfZ/A4aOIRQtsN7nHVznc3HifpyWi3ZSKSSeWrEdU6UgAPjaWRxRlxiY1rr6gvcS7eS47hYCUbV3ZfAJcKc+orMTjfA2IsDO7ZCDYgte92bxvsCLm7jm3r7tFTzYjg0dQ5re9sKlrWA6MdmIbqTdwifrzLdwW9XbM01MHupqKhbUH/y12MzOIbd9g7L4gM5ADho3UjW0zslhMlLAInvDmjWNlv4TSATHmv42tdmDTa4bYa2uhX5hrWVDBI2KSURS3LmMe8NN9+djTZ3qNyldo8VdiMkLvssdM2KMMOT8Vj5DTgBwudSut7W9mYke6Wjc1hdq6J2jbnfkI+HyOnkqTLsPiLTY0rz1DmEe4coT1K6uvdjFM4U0zzufJZvXK0XPubeiqmE9ndQ9w+0vjp28QXsdJ6NBsPU+hXY8JoYoIWRQi0bBZvHzJPEk3JPVSiysGPj7sfzD9CuYYXptDL+aj19Hx/4XSdoZdGt639tP3+i5ts/95j1W8boaZkZ83mN37FafoX4v/UdBREVHcIiIMr5yWgEnS/FYkRCSTwIiICIiAiIgKPxzCxUxZCcrmvZIx1r5XxuDmm3LSx6EqQRC91ZYzuMVcdzKyEG//rU2hHmYnA/0Hkq5gx/07FJ6R3hiqnd/Tu4ZzcvbfgdCB/I35gr1jOH981uU2kje2SN3J7eB/K5pcw9HFR22mzLa+DJmySsOeGTix43btcp4+h3gKZdXbLPDqli5YZXiQWOjxvHPqFEVWzTi4lrwQTfxXvr1G9UXZbax/efZK0dxWR6a6Nl5OYd1zy48OIHRaTGuEg/qH7j/AAr3H3xYcfLnxX8rJguEGAlxdckWsNB/yVLLDFVsd8LgfXX2XOu0/aSZ8rMLo35JZW5p5RviiPAW3OPvYgaZrjO7Vtz5c+/e1vbT9pkUMppqOJ1bUjRzWG0bCND3km645DlYkKFbT7RVnifUtpWH8EEbd388mt/IkKQ2Ww6lw+DLHGHSX/EOIHxPPE/puFlr4ttXVMqGNc4CJ4GoBBuXZTYjcAXRb+Dyb+FTMXX+G6JvKe8m7vXft7f77K/jWD1tK2WWTFa/NE0vI7wkaNvoM1tf3V87J5K19Ayatm710vjiuBmbGQMocQBe+rugO/lX8VLHsdHLmcJWuDg1r3uLbWcTlBIAzDxcLhV/Ctp6/Coo2iSGqw+ORrS8Nc6aOLN4h4XACwvvvY2Gg3LE+r9PrXRJ286dzXmRtwRuuN43qKwLaejrbimnZKWgOcG3u0OvbMCNDodN6lnOA1JsqvPVaXZmS+j2kczcH9CpXDKP7Mxxe+99eg8upWapxaNu45jyG73VU2l2lihZ3lTI1jR8LeJPJrd7itJjb58OjP1PJyY9OVe9oMYZGySolOVjBf0G4DmSdPMqvdlVA/uJayUWkrJDL5R3Pdjy1cR0IUVQ4dUY1IyaoY6HD2HNHEdHzkbi78v0toL3zLpjWgAACwGgA3ADkmeW+08LcPHrvX1ERUdAiIgIiICIiAiIgIiICIiAiL4TbU7kFB7XamjEDWTRCWofcQAHK9vN2Yahl7abifK4oeF7ZV1E1rXyMnZ8khOcDk1+/wB7rBXYka2qmq3ahzi2IfLG3RtuWmvmXc1M05w6Cq7z7Oa2MMAHfWjBfxdls4Fu8AHnx0Ubs8OPkz3UrRdq9M7+LDKw/lyyD01B+idn9YJqqsrrZs8wDc3yMALAeWhZ/avMmKYTUEtnw804O58Dw4g9WFoaR1sfJVXBsRNBUNc1x+zyOyyNPC+geBwI3+hHK1uu3yv6bPDHknU6MJZJqgyEvFnOLh4mtt4mtbl+F5cSZC7XK1sQHxOUNthihEkVNFD307jmY3TTfqSdwtff+xWbaDEA8sia4ZXbzwvfTMN5aBd1h8Ra0brrSlnZRYpDUSk9xLB3LZTqGvFviPUNGv5ieBVp2r0uXLLiwykn979/t9uzXxOlxaFnfTxRTMZ4iI3OdJHbe4ZuIHFqsGD4jC6lNQC5zCC55c50jiWtDTcvJJsGgWJ0spnGNoqWnhdLJKwtsbAOa4v00DQDrdVfs+ozHRNZIAHSFz+7O8MebC432IH1VspJWPpObPkyvV37eWpK+SjlFfQBoZICyanJEQOQnMRl0a4Fpv1udblY4e1l733dSkssdGvL35rixuQAG2vw5Kv7T3EgpRIS0kucTvytAa31OS5PE62U1srj7aFsgZTQyOdbK54vkte+nG9+Y3cVS5dN1HL6nUyks/N7/G/sxY12nzv8FPEIL/jk8T/QWyjzN1F7J4nTtrRLiTTOH2DZpHFwjdfQuYdC36NtcDlPYtiNFXFnf0wp3ZvvJINxbY6iIjR17a3va+/cqrjdDE1zmxOL4r2a4tyki2hIO4/4Vblb5YY2O/VOJMjkijdp3txG7TKXgXyX4OLbkc8p9d1cx2OldiOES0znHv6c5Y338Qcyz6d194sRl8mdVP7PY/NUyUcg1hqKV7ngDRk8T2hxB4XLiLHkOSOuZreiIi4iIgIiICIiAiIgIiICIiAtLG832afL8XdSW88hst1QW3dSY8Oq3tNj3TgCN4zDLcf3IXw4Lg04axo4KVDgeKiq2jZCIRFM2Z0kbXOiaHF8by0Ejwix8r3HEcViqe9jF5IJIxze1zB/3NCjThslTD5WjeQojF6gOAbewJ4/qbKRwXAaysGaCJuTcXukYAPMA5h7LomzXZ9BA15qLTyyNLXEizGtdvDBvv8Am38rK2OFp2iuVWxd6Seqll76fJnjcwkNblGYZAN4PM+mup1K/HHHDGZg2S4A1GYF243HGxDj5qbaajByY5GuqKA/C8C74geDxy67uXypg2zOFzPE0MxcwODxEHeBrt48O8eR9lxzm5OC5fV3d+K9Ti5JlL9PzZq/O/n7oDAMFZSV7YaiOKUuaHsfY6G/AE2uCDrbh10sGOY0KWYvecvifvAdcuETWZba+FkZJvpeU71r7cx5K2jkBNrvZfzAt/8AYqLx3EGxVtJUTG7Wl5dpfcGjcOpHsujg5LlwfU92vRjhhbP05T/Otb+dbv7IPHK+OSdksbw4OZY8CCCTqDu+JZ4qoHfoforNHgEmKyd59nbR0xNy/I0Ty8raaDru/m4Q+LbEV9MTkj+0x8HR/Fb8zDrfyv5q068p1WaeZz5TPkt21+8HMe61KucHQKPqpnRktkjexw3teMpHmDqvFLUiV4Z3kcQP43k5R55Qf0UMZjp0nsRv31bb4bQ+95f+VddgoMlK5trAVFSGjoKmUfsVUuySMQVVbTMlE0YbC9sjbZXEtNyLE/NbfwXTmMA0AAGp001JufqSVZ1cc7SvSIiNBERAREQEREBERAREQEREBUvtNr3mKOghaHT1r+6aDuay4zuPuBfgLngrouY7W1mTF3vJ1goHmLpJK50QI6/e/RGfLlrFG/6q2gBpsOswN8MlTlBmncPiOY/Ay98rRw46rXfUV8sncvlqC5/4HyPsRYk3Dja1gVgo46fuHXc4VAcMgANt4tbS3PerNLgdRM5sss4ZI0WHdt+HfxvqddVEm2fHwXPx38eP55UB7JqKbvYCY5WGzm/hdY6hw3EdPbmu+7B4jTV9KyoYLu+GRjtTHIPibb1BB4ggriuN0EkUjmSnMTrm35geNypTsYxr7NiD4HG0dQwm3ASR6g/25/pyUy2doxyxs3Ph3SpwuJ4tlA8tPcbiqLjHZVRyOziENd80TjEf7R4b+i6Kx4IuCCOYXpT1VTbi2K9kT8l6eWoMzSHME0jXx3BvbRoI81t7K9nFa+qjqa8wsbCD3cUZzkuOhLr6DnvOoG62vXkTfwv9XPpuO+1akeGxAWyA9Tqfdco7RdoMtSaGjl7ogXqJ/i7lp/Cy2rnkcBrqBcalvSdrsdbRUk85sXRxuc1vN1rMB6FxAv1X5sw65aZHkufIS97jvc5xJJPuT6lOqqRY6SJkEbpqama4B1nVNSGzzlx4hrvBGNbaNJ5uKw4vXVUrGioc9zHi7Q4ANI6AABb+CYRUTwkCTu4XHcdcxG8gcrjnwWxW0jmyRRVkl4WtIY5oy6gAAO0uDb9uqrp0/QtxmWrPHftrf/FY2Qxr/TKwP/2JLMl/K0m4cD+Um/lfou/r82461hdIGHMwXDSeIG4rvGxVS6TD6R7jdxhjueJIaBc+yRbivsmkRFLYREQEREBERAREQEREBfHOAFybAbyvqw1kHeMcwm1+P1RM890XVY8BpG2/U6D23n6LmHaPI/7RDVO+Fze5fYWFgS9t+lyT/Sr3VYbJHvaSOY1H/HqovEKJk8bopBdrhY/sRyIOq0uMs7OzP0+GfHZiotHMGyMedQ1zXeYBB/ZdKbikBbn71mXnmA+h1v0XK8RwWqoybNM0PB7RcgfmaNW+e7rwWg3GGnl9Vnu4vO4+Tk9PbjYtu1uLsmeCz4WAi50zEnh00H1Ub2e05kxOIjdEx73HzaWD6vCgopZKh2WFjpHcmjQeZ3DzKtuGbFvjYHiqlinOrnROs3oNLFwHn6Kcd27VnFyc9uUjplXLVsOamfHu1ZJnbc9JGE5fItd6KJxbGsQljMU9BI5hI1p6trTp1HduA6XVbYcZi+CrhnHKVgafdoufUrM3aXGGfFRwSdWPyfRzitbZfLO+l5Z+ms2D1P2WQSMw/E843F0plbr0dLlPqCrF/wBVYhLoyimb1llihb65Mzvoqz/1liPHDP8A5h/hfDtZirvhw5jerpmn9wn5f5Ffocn9N/ZKbbQ1D8Mqu9LM+UPyx5rAMc17gXO1fo062b5Ll2GSgsA6aK7T1uNTAtcaSFrgQbNLzY6HR2YHRUfFMEmorZxni4SNBsDyPy+u/wCipyd+699PyTHeU7OmbNYpEYGNL2tcwWIcQN3EX3gqC24x2J4bFGQ8tNy4bgbWAB47z9FSBW3Hx/WyxGpF7Nu5x3BouSelt6p1dtNcvU5ZcfRSrccthqXaAcSSu47NV/2enhge24jjay7d92tAJset+K57snsu8PFRUixH8OPkfmd15D1PIXyno5JPhaT13D33K+OPbu6/TenkxuXIt1PO17czTcLItLCqLumWJuSbnl6LdVayykl7CIihUREQEREBERAREQEREBYJqSN/xMaettfdZ0RMtnhGyYJEdwc3yP8Am6j6jZGB5uQ0nm6Njj7qxIp6qv8AVz+Vdbs2WizHMA5Zco9gvJwGXmw+p/wrIinrq89RmrBwObk33Xz/AEWb5R/cFaEU9dW/E5qt/os3yj+4L0MEm5N91Z0Trp+JzVoYDLzZ7n/C9jZ550Lm+xP6qxIo66rfUZqe/s8o3G744yfyxhv6FSWHbI0kH8OMN8gG/VoBU8ijbPru9taKgibuY31Fz9VsoihW23yIiIgREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z', altSrc: 'https://i.pinimg.com/736x/86/60/e3/8660e326cf30bd1914dde64cef7f32b9.jpg', isFlipped: false, scale: 1 },
  { id: 2, mainSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuwAZuJHDe2NfZcu4OxbAh54JRmdAsMoJTHfYnu65VnqXcBf8QUfQGVocqrW1x-LUfhU&usqp=CAU', altSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReC75Y0YuRl6aTQH22M3etHEuLkcLUl3-DLmDTqdccjtJZmvbOtbBFrDveOs-SK3PBll8&usqp=CAU', isFlipped: false, scale: 1 },
  { id: 3, mainSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQ4rjN8liSWCzo7EN0im-J-7xqF8x5Yc6tRtG5oY671SgStO4QxkOD8Z85Rhvx9WQSqI&usqp=CAU', altSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOJbWafhpaIJitK0XLFElUpHCwLfL6Vu1e-F_m9GXuemt_8qpHzaNwced6gV4-kmx3IE&usqp=CAU', isFlipped: false, scale: 1 },
  { id: 4, mainSrc: 'https://static.vecteezy.com/system/resources/previews/055/651/305/non_2x/fun-cute-baby-panda-hold-a-bamboo-cartoon-colored-character-isolated-drawing-line-style-sketch-classic-vintage-design-illustration-vector.jpg', altSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlypTJz9PTzAezKVn_mz7WDp4zwOA7iK1IzQdn4F74J0LhajIk_j-dhWo3ICrGeTSo30&usqp=CAU', isFlipped: false, scale: 1 },
  { id: 5, mainSrc: 'https://thumbs.dreamstime.com/b/cute-kawaii-panda-bamboo-playful-illustration-kids-colorful-stars-heart-bacdrop-vector-isolated-white-background-383622625.jpg', altSrc: 'https://t3.ftcdn.net/jpg/06/70/83/36/360_F_670833619_44CpDkCWgLBvt45eBUclhOClkVrBUE67.jpg', isFlipped: false, scale: 1 },
  { id: 6, mainSrc: 'https://i.etsystatic.com/50470297/r/il/57a98c/5824803689/il_fullxfull.5824803689_6t8o.jpg', altSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgFc1GzJx0Mh3PzRWW7Uwexu21wf-cmm0UicSloLsz10Az2brvBxgfMS0SKVEM1yMfyM&usqp=CAU', isFlipped: false, scale: 1 },
  { id: 7, mainSrc: 'https://static.vecteezy.com/system/resources/previews/010/968/093/non_2x/cute-panda-bear-kawaii-free-vector.jpg', altSrc: 'https://previews.123rf.com/images/yupiramos/yupiramos1708/yupiramos170825208/84785308-kawaii-panda-bear-icon-over-white-background-colorful-design-vector-illustration.jpg', isFlipped: false, scale: 1 },
  { id: 8, mainSrc: 'https://i.etsystatic.com/50470297/r/il/7d8ac0/5784941418/il_fullxfull.5784941418_cmp8.jpg', altSrc: 'https://t3.ftcdn.net/jpg/07/73/17/32/360_F_773173210_9qZgsWh2OfGyOVXXrVZ0mstRxckXF9zJ.jpg', isFlipped: false, scale: 1 },
  { id: 9, mainSrc: 'https://i.pinimg.com/736x/5f/b7/82/5fb7820ccdf2afe7ea7935b83740d647.jpg', altSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKC0SJdTA5kd80KLKCbsPK7z0-V7KrIY57ZJIKUgbrv7fN_YPGG3nVogudBYvgjxRTU_Q&usqp=CAU', isFlipped: false, scale: 1 },
];

export default function Index() {
  const [gridImages, setGridImages] = useState(initialGridImages);

  // Fungsi untuk menangani klik gambar
  const handleImagePress = (imageId: number) => {
    setGridImages(currentImages =>
      currentImages.map(image => {
        if (image.id === imageId) {
          // Hitung skala baru dengan batasan maksimal 2x
          const newScale = Math.min(image.scale * 1.2, 2);
          return {
            ...image,
            isFlipped: !image.isFlipped, // Toggle gambar utama/alternatif
            scale: newScale, // Terapkan scaling
          };
        }
        return image;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Bagian komponen lama tetap sama */}
      <View style={styles.rectangle}>
        <Image
          source={{ uri: "https://media.istockphoto.com/id/1195743934/id/vektor/desain-vektor-karakter-panda-lucu.jpg?s=612x612&w=0&k=20&c=KKTXLb68VkX8JW8KRVogaVD7J7kK_SZLt5TG8a3Ilmw=" }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.triangle} />
      <View style={styles.pill}>
        <MaterialIcons name="person" size={24} color="white" />
        <Text style={styles.pillText}>105841110422</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.redText}>NUR FADILLAH SARI</Text>
        <Text style={styles.whiteText}>105841110422</Text>
      </View>
      <View style={styles.blueCircle}></View>

      {/* Grid gambar 3x3 */}
      <View style={styles.gridContainer}>
        {gridImages.map(image => (
          <TouchableOpacity
            key={image.id}
            onPress={() => handleImagePress(image.id)}
            style={styles.gridCell}
          >
            <Image
              source={{ uri: image.isFlipped ? image.altSrc : image.mainSrc }}
              style={[
                styles.gridImage,
                { 
                  transform: [{ scale: image.scale }],
                  borderRadius: 8, // Untuk konsistensi dengan sel
                }
              ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 60,
  },
  rectangle: {
    width: 220,
    height: 110,
    backgroundColor: "#eee",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 70,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "black",
    marginBottom: 20,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fe508dff",
    borderRadius: 50,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  pillText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  textContainer: {
    backgroundColor: "red",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  redText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  whiteText: {
    color: "white",
    fontWeight: "bold",
  },
  blueCircle: {
    width: 50,
    height: 50,
    backgroundColor: "black",
    borderRadius: 100,
    marginTop: 10
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 330, // Maksimal 3 kolom (100*3 + margin)
    marginTop: 20,
  },
  gridCell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
    height: '100%',
  }
});